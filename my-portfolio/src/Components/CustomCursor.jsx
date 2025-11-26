import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x:0 , y:0 });


  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove" , moveHandler);
    return ()=>{
      window.removeEventListener("mousemove" , moveHandler);
    }

  });
  return (
    <>
     <div className="fixed top-0 left-0 pointer-events-none z[9999]"
     
      style ={{transform : `translate3d(${position.x - 40}px , ${position.y - 40}px , 0)`}}
     >
       <div className="w-20 h-20 rounded-full bg-gradient-to from bg-pink-500 to-blue-500 blur-3xl opacity-80 "></div>
     </div>
    </>
  );
}
