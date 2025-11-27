import { useEffect, useState } from "react";

export const useInterval = (ms: number) : Date => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
      console.log(new Date());
    }, ms);

    return () => clearInterval(id);
  }, [ms]);

  return date;
}