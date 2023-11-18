import { AppImage, AppText } from "@/features/app/components";

const Filter: React.FC = () => (
  <div className="d-flex justify-between px-2 mb-5">
    <AppImage
      src="/svg/icon-search-deactive-16x16.svg"
      alt="Deactive Search"
      height={16}
      width={16}
    />

    <div className="d-flex gap-2">
      <AppText weight="semibold" color="gray-4" size="small">
        Recents
      </AppText>
      <AppImage
        src="/svg/icon-arrow-drop-down-16x16.svg"
        alt="Arrow Down"
        height={16}
        width={16}
      />
    </div>
  </div>
);

export default Filter;
