import { AppButton, AppImage, AppText } from "@/features/app/components";

const OnPlayMusicControl: React.FC = () => {
  return (
    <div className="d-flex flex-column align-center">
      <div className="d-flex align-center gap-7 mb-2">
        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-shuffle.svg"
            alt="shuffle"
            height={24}
            width={24}
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-previous-play.svg"
            alt="shuffle"
            height={16}
            width={16}
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-pause-button.svg"
            alt="shuffle"
            height={34}
            width={34}
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-next-play.svg"
            alt="shuffle"
            height={16}
            width={16}
          />
        </AppButton>

        <AppButton variant="plain">
          <AppImage
            src="/svg/icon-repeat.svg"
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
