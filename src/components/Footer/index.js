import React from "react";
import { withTranslation } from "react-i18next";
import { boxLink } from "@utils/config.js";
import "./index.less";

const links = [
  {
    name: "World Background",
    path: "/worldBackground",
  },
  {
    name: "NFT",
    path: "/mystaryBox",
  },
  {
    name: "Whitepaper",
    link: "https://tse-1.gitbook.io/thespectrumera/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/TheSpectrumEra",
  },
  {
    name: "Medium",
    link: "https://medium.com/@thespectrumera",
  },
  // {
  //   name: "Privacy Policy",
  // },
  // {
  //   name: "Terms Of Use",
  // },
  // {
  //   name: "Enter The Forum",
  // },
  {
    name: "Buy NFT",
    link: boxLink
  },
];
const linkIcons = [
  {
    src: require("../images/twitter.png"),
    link: "https://twitter.com/TheSpectrumEra",
  },
  // {
  //   src: require("../images/messge.png"),
  // },
  // {
  //   src: require("../images/t.png"),
  // },
];
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toPath(path) {
    if (!path) {
      return;
    }
    this.props.history.push({
      pathname: path,
    });
  }
  render() {
    const { t } = this.props;
    return (
      <div className="footer">
        <img src={require("@/assets/images/logo.png")} className="logo" />
        <div className="link">
          {links.map((r, idx) =>
            r.path ? (
              <span key={idx} onClick={() => this.toPath(r.path)}>
                {t('footer.'+r.name)}
              </span>
            ) : (
              <a href={r.link} target="_blank" key={idx}>{t('footer.'+r.name)}</a>
            )
          )}
        </div>
        {/* <div className="linkIcons">
          {linkIcons.map((r, idx) => (
            <React.Fragment  key={idx}>
              <a href={r.link} target="_blank">
                <img src={r.src} /> 
               
                </a>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    );
  }
}
export default withTranslation()(Footer);
