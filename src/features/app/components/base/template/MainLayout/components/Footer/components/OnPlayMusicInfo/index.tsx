import React from "react";

// import { ReactSVG } from "react-svg";
import { AppText } from "@/features/app/components";

const OnPlayMusicInfo: React.FC = () => {
  const image =
    "https://i.scdn.co/image/ab67616d0000485160a65de69f03d8183fa316f8";

  return (
    <div className="d-flex align-center gap-4">
      <img style={{ borderRadius: "4px" }} src={image} width={55} />

      <div>
        <AppText weight="semibold" className="mb-1" size="small">
          YES or YES
        </AppText>
        <AppText weight="semibold" color="gray-3" size="xsmall">
          TWICE
        </AppText>
      </div>
      {/* <ReactSVG src="icon-heath.svg" /> */}
    </div>
  );
};

export default OnPlayMusicInfo;
