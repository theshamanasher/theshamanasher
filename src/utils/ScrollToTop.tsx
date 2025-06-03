// src/utils/ScrollToTop.tsx
const scrollToTop = (behavior: ScrollBehavior = "smooth") => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, left: 0, behavior });
  }
};

export default scrollToTop;
