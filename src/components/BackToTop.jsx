import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#"
      aria-label="Back to top"
      className="back-to-top d-flex align-items-center justify-content-center"
      style={{
        opacity: show ? 1 : 0,
        visibility: show ? "visible" : "hidden",
        transform: show ? "none" : "translateY(20px)",
        transition: "all .3s",
      }}
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <i className="fa-solid fa-arrow-up text-primary"></i>
    </a>
  );
}