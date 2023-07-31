import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";
import style from "./MainPanel.module.scss";

export const MainPanel = () => {
  return (
    <>
      <div className={style.mainPanel2Column}>
        <LeftPanel />
        <RightPanel />
      </div>
      <div className={style.mainPanel1Column}>
        <LeftPanel />
      </div>
    </>
  );
};
