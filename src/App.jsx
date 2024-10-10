function Button({
  text = "Click Me!",
  color = "blues",
  fontSize = 12,
  handleClick,
}) {
  const buttoStyle = {
    color: color,
    fontSize: fontSize + "px",
  };
  return (
    <button
      onClick={() => handleClick("https://www.theodinproject.com")}
      style={buttoStyle}
    >
      {text}
    </button>
  );
}

function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  );
}

export default App;
