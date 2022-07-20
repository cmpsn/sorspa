import Head from 'next/head'

const Meta = ({ metaData }) => {
  return (
    <Head>
      <title>{metaData.metaTitle}</title>
      <meta property="og:title" content={metaData.metaTitle} />

      <meta name="description" content={metaData.metaDescription} />
      <meta property="og:description" content={metaData.metaDescription} />

      <meta name="image" content={metaData.metaImage.src} />
      <meta property="og:image" content={metaData.metaImage.src} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta;