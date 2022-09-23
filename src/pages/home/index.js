import React from "react";
import styles from "./index.module.less";
import BoxPopup from "../../components/BoxPopup";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientHeight: document.documentElement.clientHeight,
    };
  }

  render() {
    const { clientHeight } = this.state;
    return (
      <div className={styles.home} style={{ height: `${clientHeight}px` }}>
        <div className={styles.content}></div>
        <BoxPopup />
      </div>
    );
  }
}
export default Home;
