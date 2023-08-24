import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";
import style from "./MainPanel.module.scss";
export const MainPanel = () => {
  const pageSize = 10;
  return (
    <>
      <div className={style.mainPanel}>
        <LeftPanel pageSize={pageSize} />
        <RightPanel pageSize={pageSize} className={`${style.mobile}`} />
      </div>
    </>
  );
};
