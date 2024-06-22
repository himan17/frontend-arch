import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useEffect } from "react";
const COLORS_TOP = ["#938eff"];

export const AppCanvas: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(225% 125% at 50% 5%, #020617 69%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center"
    >
      {/* Children container with higher z-index */}
      <div className="relative z-10">{children}</div>

      {/* Canvas container with lower z-index */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas>
          <Stars radius={50} count={200} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
