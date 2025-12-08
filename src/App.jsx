import { useState, memo } from "react";

const Button = memo(({ currentIndex, setIndex, isActive }) => {
  console.log("rendered");
  const handleButtonClick = () => {
    setIndex(currentIndex);
  };

  return (
    <button
      onClick={handleButtonClick}
      style={{
        color: isActive ? "green" : "red",
      }}
    >
      Click Me {currentIndex}
    </button>
  );
});

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
