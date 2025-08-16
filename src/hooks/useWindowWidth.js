import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [device, setDevice] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setDevice(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};
