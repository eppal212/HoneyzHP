import { memo } from "react";
import { motion, MotionProps } from "framer-motion";

interface props extends MotionProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// 마우스를 올리거나 눌렀을때 꿈틀거리는 버튼
const MotionButton = ({ ...others }: props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...others}
    />
  );
};

export default memo(MotionButton);
