// Components
import { AppImage, AppText } from "@/features/app/components";

const Filter: React.FC = () => (
  <div className="d-flex justify-between px-2 mb-5">
    <AppImage
      src="/svg/icon-search-deactive-16x16.svg"
      width={16}
      height={16}
      alt="Deactive Search"
    />

    <div className="d-flex gap-2">
      <AppText color="gray-4" size="small" weight="semibold">
        Recents
      </AppText>
      <AppImage
        src="/svg/icon-arrow-drop-down-16x16.svg"
        width={16}
        height={16}
        alt="Arrow Down"
      />
    </div>
  </div>
);

export default Filter;
