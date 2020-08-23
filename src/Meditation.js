import React from "react";


function Meditation() {
  const [counter, setCounter] = React.useState(300);

  
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
}

function Page() {
  return (
    <Meditation/>
  )
}

export default Page;

