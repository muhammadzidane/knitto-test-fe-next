import { AppImage } from "@/features/app/components";

const Loading = () => (
  <div
    className="d-flex justify-center align-center"
    style={{ height: "100vh", width: "100vw" }}
  >
    <AppImage
      src="/svg/icon-rolling-0.8s.svg"
      className="btn__loading"
      alt="Loading SVG"
      height={24}
      width={24}
      priority
    />
  </div>
);

export default Loading;
