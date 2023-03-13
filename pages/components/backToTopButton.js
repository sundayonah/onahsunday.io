import React, { useState, useEffect } from "react";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      // Change 300 to whatever scroll position you prefer
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    <button
      className={`back-to-top-btn ${isVisible ? "visible" : ""}`}
      onClick={() => handleClick()}
    >
      <ion-icon
        // className="up-icon"
        name="arrow-up-circle-outline"
        style={{ fontSize: "1rem" }}
      ></ion-icon>
    </button>
  );
}

export default BackToTopButton;
