import "./index.less";
const Loading = () => {
  return (
    <div className="loading">
      <div className="loadingContent">
        <div className="loadingIcon">
          <img src={require("../images/loading1.png")} className="loadingLeftIcon" />
          <img src={require("../images/loading2.png")} className="loadingRightIcon" />
        </div>
        <div>
          Loadin<span>g...</span>
        </div>
      </div>
    </div>
  );
};
export default Loading;
