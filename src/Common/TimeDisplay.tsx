import React from "react";

const TimeDisplay = () => {
  const [today, setToday] = React.useState<any>();

  React.useEffect(() => {
    const timer = setInterval(() => {
      const time = useDate(new Date());
      setToday(time);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return <>{today}</>;
};

export default TimeDisplay;

const useDate = (date) => {
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
