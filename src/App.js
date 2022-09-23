import React, { Suspense } from "react";
import "./index.css";
import router from "./router";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import AutoScrollToTop from "@/utils/AutoScrollToTop";
import "@/assets/fonts/font.css";
import "animate.css";
import "./flexible";
// import './i18n/config'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }
  componentDidMount() {
    const baseSize = 192;
    const flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    this.setState({
      flag
    })
    const body = document.getElementById("root");
    const setRem =() =>{
      // if (flag) {
       
      //   if (window.orientation == 0 || window.orientation == 180) {
      //     body.style.backgroundImage = `url(${require("@/assets/images/portrait.jpg")})`;
      //     body.style.backgroundSize = "100% 100%";
      //     this.setState({
      //       flag: true
      //     })
      //   }
      //   if (window.orientation == 90 || window.orientation == -90) {
      //     body.style.backgroundImage = "none";
      //     this.setState({
      //       flag: false
      //     })
      //   }
      //   body.onclick = function () {
      //     var element = this;
      //     if (element.requestFullscreen) {
      //       element.requestFullscreen();
      //     }
      //   };
      // }
      const scale = document.documentElement.clientWidth / 1920;
      document.documentElement.style.fontSize =
        baseSize * Math.min(scale, !flag ? 2: 0.5) + "px";
    }
    setRem();
  
    if (flag) {
      window.addEventListener(
        "onorientationchange" in window ? "orientationchange" : "resize",
        () => {
          setRem();
        }
      );
    }else {
      window.onresize = function () {
        setRem();
      };
    }
  }
  render() {
    const { isShowNew,flag } = this.state;
    return (
      <AutoScrollToTop>
        <Suspense fallback={<Loading />}>
          <Switch>
            <React.Fragment>
              <div id="rootbody" style={{display: flag? 'none': 'block'}}>
                <Header />
                {router.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      {item.path === "/" ? (
                        <Route
                          exact
                          path={item.path}
                          render={(props) => (
                            <Redirect to={item.redirect} push {...props} route={item} />
                          )}
                        ></Route>
                      ) : (
                        <Route
                          path={item.path}
                          render={(props) => {
                            return <item.component {...props} route={item} />;
                          }}
                        ></Route>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </React.Fragment>
          </Switch>
        </Suspense>
      </AutoScrollToTop>
    );
  }
}
export default withRouter(App);
