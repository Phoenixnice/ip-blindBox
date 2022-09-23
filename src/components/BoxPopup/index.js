import React from "react";
import styles from "./index.module.less";

class BoxPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      boxVisible: false,
      end: false,
      boxdetail: {},
    };
  }
  onConfirm() {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
        boxVisible: true,
      });
    }, 1500);
    setTimeout(() => {
      this.setState({
        end: true,
      });
    }, 10000);
  }

  render() {
    const { boxVisible, loading,end } = this.state;
    return (
      <React.Fragment>
        <div className={styles.boxPopupBg} />
        <div className={styles.boxPopup}>
          {!boxVisible ? (
            <>
              {!loading ? (
                <>
                  <div className={styles.box}>
                    <img src={require("../images/box_icon.png")} className={styles.boxIcon} />
                  </div>{" "}
                  <div>Please reconfirm NFT Number #1.</div>
                  <div className={styles.button} onClick={() => this.onConfirm()}>
                    <span>Confirm</span>
                  </div>
                </>
              ) : (
                <div className={styles.loading}>
                  <img src={require("../images/loading.png")} className={styles.loadingImg} />
                  Loading...
                </div>
              )}
              <img
                src={require("@/assets/images/box.png")}
                className={loading ? styles.boxImgLoading : styles.boxImg}
              />
            </>
          ) : (
            <div style={{textAlign: 'left'}}>
            {!end ? <img src={require("../images/gif.gif")} className={styles.gifPlay} /> : null}
            <img src={require("../images/box_end.png")} className={styles.boxEnd} />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default BoxPopup;
