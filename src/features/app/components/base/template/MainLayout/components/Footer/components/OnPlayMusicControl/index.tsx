import { AppButton, AppImage, AppText } from "@/features/app/components";

const OnPlayMusicControl: React.FC = () => {
  return (
    <div className="d-flex flex-column align-center">
      <div className="d-flex align-center gap-7">
        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-shuffle-24x24.svg"
            alt="shuffle"
            height={24}
            width={24}
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-previous-play-16x16.svg"
            alt="shuffle"
            height={16}
            width={16}
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-pause-button-24x24.svg"
            alt="shuffle"
            height={24}
            width={24}
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-next-play-16x16.svg"
            alt="shuffle"
            height={16}
            width={16}
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-repeat-16x16.svg"
            alt="shuffle"
            height={16}
            width={16}
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
