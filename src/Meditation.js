import React from "react";
import './Meditation.css'


function Meditation() {
  const [counter, setCounter] = React.useState(300);

  
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="max-width-container">
      <h1>Continue meditating till the countdown finishes. You will hear a sound when the countdown ends and you may then stop and feel one with yourself</h1>
      <div className = "countdown">
        <strong>Countdown: {counter}</strong>
        </div>
    </div>
  );
}

function Page() {
  return (
    <Meditation/>
  )
}

export default Page;

