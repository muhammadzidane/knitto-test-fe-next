// Components
import { AppText } from "@/components";

// Interfaces
import { type IItemWithIconProps } from "./interfaces";

const ItemWithIcon: React.FC<IItemWithIconProps> = ({
  children,
  icon,
  active,
}) => {
  const activeClass = `font-semibold ${active ?? false ? "text-white-1" : ""}`;

  return (
    <div className="flex gap-4">
      <div>{icon}</div>
      <AppText className={activeClass}>{children}</AppText>
    </div>
  );
};

export default ItemWithIcon;
