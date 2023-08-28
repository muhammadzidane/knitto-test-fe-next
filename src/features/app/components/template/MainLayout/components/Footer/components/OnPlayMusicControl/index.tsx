// React SVG
// import { ReactSVG } from "react-svg";

// Components
import { AppButton, AppImage, AppText } from "@/features/app/components";

const OnPlayMusicControl: React.FC = () => {
  return (
    <div className="d-flex flex-column align-center">
      <div className="d-flex align-center gap-7">
        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-shuffle-24x24.svg"
            width={24}
            height={24}
            alt="shuffle"
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-previous-play-16x16.svg"
            width={16}
            height={16}
            alt="shuffle"
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-pause-button-24x24.svg"
            width={24}
            height={24}
            alt="shuffle"
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-next-play-16x16.svg"
            width={16}
            height={16}
            alt="shuffle"
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-repeat-16x16.svg"
            width={16}
            height={16}
            alt="shuffle"
          />
        </AppButton>
      </div>

      <div className="d-flex align-center gap-2">
        <AppText color="gray-3" size="xsmall">
          2:17
        </AppText>

        <div className="playtime"></div>

        <AppText color="gray-3" size="xsmall">
          4:39
        </AppText>
      </div>
    </div>
  );
};

export default OnPlayMusicControl;
