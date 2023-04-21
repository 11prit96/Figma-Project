import { useState, useEffect } from "react";

function useOnScreen(ref, index) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const position = Array.isArray(ref.current)
        ? ref.current[index].getBoundingClientRect()
        : ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible =
        position.top < (3 * windowHeight) / 4 && position.bottom >= 0;
      setIsVisible(visible);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, index]);

  return isVisible;
}

export default useOnScreen;
