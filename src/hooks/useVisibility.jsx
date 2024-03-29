import React, { useState } from "react";

export default function useVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  const hide = () => setIsVisible(false);
  const show = () => setIsVisible(true);
  const toggle = () => setIsVisible(!isVisible);

  return { isVisible, hide, show, toggle };
}
