import { memo } from "react";
import { motion, MotionProps } from "framer-motion";

interface props extends MotionProps {
  className?: string;
  type: "up" | "down" | "left" | "right";
  children: React.ReactNode;
  onClick?: () => void;
}

// framer-motion을 이용한 AppearView
const MotionAppearView = ({ className, type, children, onClick }: props) => {
  const getInitTransform = () => {
    switch (type) {
      case "up":
        return "translateY(10px)";
      case "down":
        return "translateY(-10px)";
      case "left":
        return "translateX(-10px)";
      case "right":
        return "translateX(10px)";
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: getInitTransform() }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0px)",
        transition: {
          type: "tween",
          duration: 0.9,
          ease: [0.17, 0.55, 0.55, 1],
          delay: 0.3,
        },
      }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default memo(MotionAppearView);
