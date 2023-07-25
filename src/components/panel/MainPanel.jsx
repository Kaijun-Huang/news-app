import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";
import style from "./MainPanel.module.scss";

export const MainPanel = () => {
  return (
    <>
      <div className={style.mainPanel}>
        <LeftPanel />
        <RightPanel />
      </div>
      <div className={style.mainPanelInSearching}>
        <LeftPanel />
      </div>
    </>
  );
};
