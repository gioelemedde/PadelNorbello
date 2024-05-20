"use client";
import { useState , useEffect} from "react";
import { useInView } from "react-intersection-observer";

function Increment() {
  const { ref, inView} = useInView({
    threshold: 0,
    ssr: false, 
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval;
    if (inView) {
      interval = setInterval(() => {
        if (count < 100) {
          setCount(prevCount => prevCount + 1);
        }
      }, 5); 
    }else{
        setCount(0)
    }
    return () => clearInterval(interval);
  }, [inView, count]);

  return (
    <h3 ref={ref} className=" text-center  text-3xl font-extrabold">
      {inView ? `+${count}` : 0}
    </h3>
  );
}

export default Increment;
