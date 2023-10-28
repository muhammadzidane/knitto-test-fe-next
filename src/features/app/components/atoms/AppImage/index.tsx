// Next
import Image, { type ImageProps } from "next/image";

/**
 * Base image component
 */
const AppImage: React.FC<ImageProps> = ({
  src,
  width,
  alt = "This is Image",
  ...props
}) => <Image src={src} width={width} alt={alt} {...props} />;

export default AppImage;
