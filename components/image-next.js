import dynamic from 'next/dynamic';
const Image = dynamic(
  () => import('next/image')
);

// Custom loader for next-image
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

// Render next-image
const ImageNextJs = ({
  image,
  imageCSS,
  sizes,
  priority,
  layout }) => {

  const backupBlur = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMU2NlYDwAD9gHLEkj80wAAAABJRU5ErkJggg==";
  const blurDataURL = image.formats?.base64 ?? backupBlur;

  return (
    <Image 
      loader={myLoader}
      src={image.url} 
      alt={image.alt || image.name} 
      width={image.width} 
      height={image.height} 
      className={imageCSS} 
      sizes={sizes} 
      priority={priority} 
      layout={layout}
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  );
}

export default ImageNextJs;
