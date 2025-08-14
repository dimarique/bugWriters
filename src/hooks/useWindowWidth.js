import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [device, setDevice] = useState(
    window.innerWidth > 768 ? "desktop" : "mobile",
  );
  useEffect(() => {
    const handleResize = () => {
      setDevice(window.innerWidth > 768 ? "desktop" : "mobile");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};
