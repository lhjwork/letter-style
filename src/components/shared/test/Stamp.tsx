import React from "react";
import styles from "./Stamp.module.css"; // CSS 파일을 불러옵니다.

interface StampProps {
  children: React.ReactNode;
}

const Stamp: React.FC<StampProps> = ({ children }) => {
  return (
    <div className={styles.stampContainer}>
      <div className={styles.stampContent}>{children}</div>
    </div>
  );
};

export default Stamp;
