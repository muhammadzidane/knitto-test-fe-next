// Components
import { AppImage } from "@/features/app/components";

const Loading = () => (
  <div
    className="d-flex justify-center align-center"
    style={{ height: "100vh", width: "100vw" }}
  >
    <AppImage
      src="/svg/rolling-0.8s-24px.svg"
      className="btn__loading"
      alt="Loading SVG"
      height={24}
      width={24}
      priority
    />
  </div>
);

export default Loading;
