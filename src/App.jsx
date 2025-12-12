import { useState, memo } from "react";
import "./App.css";

const Button = memo(({ currentIndex, setIndex, isActive }) => {
  const handleButtonClick = () => {
    setIndex(currentIndex);
  };

  return (
    <button
      onClick={handleButtonClick}
      style={{
        color: isActive ? "green" : "red",
      }}
      aria-pressed={isActive}
    >
      Click {currentIndex}
    </button>
  );
});
Button.displayName = "Button";

function App() {
  const [index, setIndex] = useState(null);
  const items = 5;

  return (
    <>
      {Array.from({ length: items }).map((_, i) => {
        return (
          <Button
            key={i}
            currentIndex={i}
            setIndex={setIndex}
            isActive={index === i}
          />
        );
      })}
    </>
  );
}

export default App;
