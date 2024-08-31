import style from "./Loader.module.css";

function Loader() {
  return (
    <div className={style["container"]}>
      <div className={style["i-loader-inf-horizontal-container"]}>
        <div className={style["i-loader-inf-horizontal"]}></div>
        <div className={style["pt-8px"]}>
          <span>Processing data ...</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
