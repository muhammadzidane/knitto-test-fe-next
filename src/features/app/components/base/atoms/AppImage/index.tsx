import Image, { type ImageProps } from "next/image";

/**
 * Base image component
 */
const AppImage: React.FC<ImageProps> = ({
  alt = "This is Image",
  ...props
}) => <Image alt={alt} {...props} />;

export default AppImage;
