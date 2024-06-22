import { useMotionTemplate, motion } from "framer-motion";
import { IconType } from "react-icons";

export const Button: React.FC<{ color: string; Icon?: IconType }> = ({
  color,
  Icon,
}) => {
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <motion.button
      style={{
        border,
        boxShadow,
      }}
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
    >
      Start free trial
      {Icon && (
        <Icon className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
      )}
    </motion.button>
  );
};
