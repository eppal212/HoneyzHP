import { memo } from "react";
import { twMerge } from "tailwind-merge";
import "@/styles/appear-animation.css";

interface props {
  className?: string;
  type: "up" | "down" | "left" | "right";
  children: React.ReactNode;
}

// 서버 컴포넌트에서 애니메이션을 쓰기 위해 만든 뷰
const AppearView = ({ className, type, children }: props) => {
  const style = twMerge(className, `appear-animation-${type}`);
  return <div className={style}>{children}</div>;
};

export default memo(AppearView);
