import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="text-sm text-gray-600 mt-4">
      ⏱ Time Spent on this site: {seconds} seconds
    </p>
  );
}

export default Timer;
