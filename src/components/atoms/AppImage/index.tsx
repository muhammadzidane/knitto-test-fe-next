// Next
import Image, { type ImageProps } from "next/image";

// Interfaces

/**
 * Base image component
 */
const AppImage = ({ src, width, alt, ...props }: ImageProps) => (
  <Image src={src} width={width} alt={alt} {...props} />
);

AppImage.defaultProps = {
  alt: "This is Image",
};

export default AppImage;
