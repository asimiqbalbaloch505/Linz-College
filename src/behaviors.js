const timers = new WeakMap();

// ---------- Carousel ----------
const items = (c) => Array.from(c.querySelectorAll(".carousel-inner > .carousel-item"));
const current = (c) => Math.max(0, items(c).findIndex((i) => i.classList.contains("active")));

function go(c, idx) {
  const list = items(c);
  if (!list.length) return;
  const n = (idx + list.length) % list.length;
  list.forEach((it, i) => it.classList.toggle("active", i === n));
  c.querySelectorAll("[data-bs-slide-to]").forEach((b) => {
    const on = Number(b.getAttribute("data-bs-slide-to")) === n;
    b.classList.toggle("active", on);
    if (on) b.setAttribute("aria-current", "true");
    else b.removeAttribute("aria-current");
  });
}

function schedule(c) {
  clearInterval(timers.get(c));
  if (!c.hasAttribute("data-bs-ride")) return;
  const ms = Number(c.getAttribute("data-bs-interval")) || 5000;
  const id = setInterval(() => {
    if (!c.isConnected) { clearInterval(id); return; }
    if (!document.hidden) go(c, current(c) + 1);
  }, ms);
  timers.set(c, id);
}

function prepare(c) {
  if (c.dataset.jsReady) return;
  const list = items(c);
  if (!list.length) return;
  const active = list.find((i) => i.classList.contains("active")) || list[0];
  active.classList.add("active");
  list.forEach((it) => {
    if (!it.children.length && !it.textContent.trim()) it.innerHTML = active.innerHTML;
    it.classList.remove("sf-hidden");
  });
  c.dataset.jsReady = "1";
  schedule(c);
}

// ---------- FAQ ----------
function setFaqItem(item, open) {
  item.classList.toggle("active", open);
  item.classList.toggle("open", open);
  const ans = item.querySelector(".faq-answer");
  const inner = item.querySelector(".faq-answer-inner");
  if (ans) ans.style.gridTemplateRows = open ? "1fr" : "0fr";
  if (inner) inner.style.paddingBottom = open ? "22px" : "";
  const icon = item.querySelector(".faq-toggle i");
  if (icon) {
    icon.classList.toggle("fa-plus", !open);
    icon.classList.toggle("fa-minus", open);
  }
  item.querySelector(".faq-question")?.setAttribute("aria-expanded", String(open));
}

function showFaqCategory(tab) {
  const cat = tab.getAttribute("data-faq-category");
  const root = tab.closest("section") || document;
  root.querySelectorAll(".faq-tab").forEach((t) => t.classList.toggle("active", t === tab));
  root.querySelectorAll(".faq-category").forEach((c) => {
    const on = c.getAttribute("data-category") === cat;
    c.classList.toggle("active", on);
    if (on) c.classList.remove("sf-hidden");
  });
}

function runFaqSearch(input) {
  const q = input.value.trim().toLowerCase();
  const root = input.closest("section") || document;
  let shown = 0;
  root.querySelectorAll(".faq-item").forEach((it) => {
    const match = !q || it.textContent.toLowerCase().includes(q);
    it.style.display = match ? "" : "none";
    if (match) shown++;
  });
  root.querySelectorAll(".faq-category").forEach((c) => {
    if (!q) { c.style.display = ""; return; }
    const any = Array.from(c.querySelectorAll(".faq-item")).some((it) => it.style.display !== "none");
    if (any) c.classList.remove("sf-hidden");
    c.style.display = any ? "block" : "none";
  });
  root.querySelectorAll(".faq-tabs").forEach((t) => (t.style.display = q ? "none" : ""));
  const none = root.querySelector(".faq-no-results");
  if (none) {
    if (q && shown === 0) none.classList.remove("sf-hidden");
    none.style.display = q && shown === 0 ? "block" : "none";
  }
}

// ---------- Events ----------
function onClick(e) {
  const t = e.target;
  if (!t || !t.closest) return;

  const fq = t.closest(".faq-question");
  if (fq) {
    const item = fq.closest(".faq-item");
    if (item) setFaqItem(item, !item.classList.contains("active"));
    return;
  }
  const tab = t.closest(".faq-tab");
  if (tab) {
    const inp = document.getElementById("faqSearch");
    if (inp && inp.value) { inp.value = ""; runFaqSearch(inp); }
    showFaqCategory(tab);
    return;
  }
  if (t.closest("#faqClear")) {
    const inp = document.getElementById("faqSearch");
    if (inp) { inp.value = ""; runFaqSearch(inp); inp.focus(); }
    return;
  }

  const ctl = t.closest(
    "[data-bs-slide], [data-bs-slide-to], .carousel-control-prev, .carousel-control-next, .featured-news-control"
  );
  if (ctl) {
    let c = ctl.closest(".carousel");
    if (!c) {
      try {
        const sel = ctl.getAttribute("data-bs-target") || ctl.getAttribute("href");
        c = sel ? document.querySelector(sel.split('"')[0]) : null;
      } catch { /* ignore */ }
    }
    if (c) {
      prepare(c);
      e.preventDefault();
      const to = ctl.getAttribute("data-bs-slide-to");
      if (to !== null) go(c, Number(to));
      else {
        const dir = ctl.getAttribute("data-bs-slide") ||
          (/prev/.test(String(ctl.className)) ? "prev" : "next");
        go(c, current(c) + (dir === "prev" ? -1 : 1));
      }
      schedule(c);
      return;
    }
  }

  const a = t.closest('a[href^="#"]');
  if (!a || e.defaultPrevented) return;
  const id = a.getAttribute("href").slice(1);
  if (!id) return;
  const el = document.getElementById(decodeURIComponent(id));
  if (!el) return;
  e.preventDefault();
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
}

const onInput = (e) => { if (e.target && e.target.id === "faqSearch") runFaqSearch(e.target); };
const onKeyDown = (e) => { if (e.key === "Enter" && e.target && e.target.id === "faqSearch") e.preventDefault(); };
const onSubmit = (e) => e.preventDefault(); // abhi koi backend nahi, form page reload na kare

export function initBehaviors() {
  const scan = () => document.querySelectorAll(".carousel").forEach(prepare);
  let raf = 0;
  const mo = new MutationObserver(() => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(scan);
  });
  mo.observe(document.body, { childList: true, subtree: true });
  document.addEventListener("click", onClick);
  document.addEventListener("input", onInput);
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("submit", onSubmit);
  scan();
  return () => {
    mo.disconnect();
    document.removeEventListener("click", onClick);
    document.removeEventListener("input", onInput);
    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("submit", onSubmit);
    cancelAnimationFrame(raf);
  };
}