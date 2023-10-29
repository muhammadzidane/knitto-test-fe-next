// Components
import { AppImage } from "@/features/app/components";

const Loading = () => (
  <div
    className="d-flex justify-center align-center"
    style={{ height: "100vh", width: "100vw" }}
  >
    <AppImage
      className="btn__loading"
      src="/svg/rolling-0.8s-24px.svg"
      width={24}
      height={24}
      alt="Loading SVG"
      priority
    />
  </div>
);

export default Loading;
