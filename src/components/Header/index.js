import React, { useEffect } from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./index.less";

const menu = [
  {
    pathname: "/home",
    title: "Home",
    name: "home",
    children: [
      {
        title: "Subscribe Now",
        pathname: "booking",
      },
      {
        title: "About Spectrum",
        pathname: "ip",
      },
      {
        title: "Spectrum Game Introduction",
        pathname: "roadmap",
      },
    ],
  },
  {
    pathname: "/game",
    title: "Game",
    name: "game",
    children: [
      {
        title: "KMA",
      },
    ],
  },
  {
    pathname: "/worldBackground",
    name: "worldBackground",
    title: "World Background",
  },
  {
    pathname: "/mystaryBox",
    name: "mystaryBox",
    title: "Mystery Box",
  },
  {
    pathname: "/whitePaper",
    name: "howhitePaperme",
    title: "Whitepaper",
    link: "https://tse-1.gitbook.io/thespectrumera/",
  },
];
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  scrollToAnchor(e, item, pathname) {
    e.stopPropagation();
    const anchorname = pathname ? `${item.name}?anchor=${pathname}` : "";
    if (this.props.location.pathname !== item.pathname) {
      this.props.history.push({ pathname: item.pathname, query: { anchorname } });
      return;
    }
    if (pathname) {
      window.fullpage_api.silentMoveTo(anchorname);
    }
  }

  render() {


    return (
      <div className="header">
        <div className="headerBg" />
        <div className="headerContent">
          <img src={require("@/assets/images/logo.png")} className="logo" />
     
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
