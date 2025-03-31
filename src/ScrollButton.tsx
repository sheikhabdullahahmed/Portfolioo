import { FaArrowUp } from "react-icons/fa"// Importing the icon

export const ScrollButto = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <div
      onClick={scrollToTop} // Scroll action on click
      className="scroll-widget"
      title="Scroll to top"
    >
      {/* Using the FaLocationArrow icon directly */}
      <FaArrowUp  className="scroll-widget-img" />
    </div>
  );
};
