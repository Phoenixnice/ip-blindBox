import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AutoScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    const fullpage = document.getElementById("fullpage");
    if (fullpage ) {
      setTimeout(()=>{
        if (!location.query && !location.search.length && window.fullpage_api.getActiveSection().index() !== 0) { 
          window.fullpage_api.setScrollingSpeed(1);
          window.fullpage_api.moveTo(1);
          window.fullpage_api.setScrollingSpeed(700);
        }
        if(location.query){
          window.fullpage_api.silentMoveTo(location.query.anchorname);
        }
      },300)
    
    }
  }, [location.pathname]);
  return children;
};

export default AutoScrollToTop;
