import { useState, useEffect } from 'react';

const useIsMobile = (Componente, Componente404) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 880);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 880);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  if(isMobile){
    return Componente404
  }else{
    return Componente
  }
    /*return isMobile;*/

};

export default useIsMobile;