import { useEffect, useLayoutEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./Home";
import Unavailable from "./Unavailable";
import pagesMap from "./subpages";
import routes from "./routes.json";
import { initBehaviors } from "./behaviors";

export default function App() {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  useEffect(() => initBehaviors(), []);

  useLayoutEffect(() => {
    document.body.dataset.page = routes.find((r) => r.path === pathname)?.slug ?? "home";
  }, [pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (!href.startsWith("/") || href.startsWith("//") || a.target === "_blank" || a.hasAttribute("download") || /^\/(downloads|images)\//.test(href)) return;
      e.preventDefault();
      navigate(href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);

  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    const t = setTimeout(() => { try { document.querySelector(hash)?.scrollIntoView(); } catch {} }, 300);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {routes.filter((r) => r.path !== "/" && pagesMap[r.slug]).map((r) => {
        const Page = pagesMap[r.slug];
        return <Route key={r.slug} path={r.path} element={<Page />} />;
      })}
      <Route path="/unavailable" element={<Unavailable />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}