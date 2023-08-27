// Next
import Image, { type ImageProps } from "next/image";

/**
 * Base image component
 */
const AppImage = ({
  src,
  width,
  alt = "This is Image",
  ...props
}: ImageProps) => <Image src={src} width={width} alt={alt} {...props} />;

export default AppImage;
