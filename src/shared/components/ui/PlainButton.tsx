import { IconType } from "react-icons";

export const PlainButton: React.FC<{ text: string; Icon?: IconType }> = ({
  text,
  Icon,
}) => {
  return (
    <div className="flex items-center gap-1 text-error/60 hover:underline mt-6 mb-2 cursor-pointer">
      {text} {Icon && <Icon />}
    </div>
  );
};
