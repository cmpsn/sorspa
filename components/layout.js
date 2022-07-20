import Meta from './meta';
import Footer from './footer';

const Layout = ({ children, metaData, footerData }) => {
  return (
    <>
      <Meta metaData={metaData} />

      {children}
      
      <Footer footerData={footerData} /> 
    </>
  )
}

export default Layout