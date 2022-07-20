// ==== Import Components ====
import Layout from '../components/layout';
import Hero from '../components/hero';
import ScrollToButton from '../components/scroll-to-button';
import SectionStock from '../components/section-stock';
import SectionVideo from '../components/section-video';
import SectionHorizon from '../components/section-horizon';
import SectionVertic from '../components/section-vertic';
import ReviewGroup from '../components/review-group';
import AccordionItem from '../components/accordion-item';

// import CheckoutForm from '../components/checkout-form';
// --- OR dynamic import: ---
import dynamic from 'next/dynamic';
const CheckoutForm = dynamic(
  () => import('../components/checkout-form')
);

// ==== PRODUCT ATTRIBUTES ====
// Comment/uncomment the corresp. line -> product is simple OR it has variants!!!
//import productInfo from '../data/variable-product.json';
import productInfo from '../data/simple-product.json';

// ==== Data for site content ====
import metaData from '../data/meta-data.json';
import dataHero from '../data/hero.json';
import dataSectionVideo from '../data/section-video.json';
import dataSection1 from '../data/section-1.json';
import dataSection2 from '../data/section-2.json';
//import dataSection3 from '../data/section-3.json';
import dataSection4 from '../data/section-4.json';
import dataReviews from '../data/reviews.json';
import dataFaqs from '../data/faq.json';

// ==== Page generation ====

function Home() {

  // FILTER VARIABLE - Check if product has Variants - returns Boolean ----
  const productIsVariable = typeof productInfo.atribute === 'object' && 
    Object.keys(productInfo.atribute).length > 0 && 
    productInfo.variante?.length > 0;

  return (
    <Layout 
      metaData={metaData}
      footerData={metaData}
    >
      <Hero hero={dataHero} />

      <main className="container-fluid px-0 mx-auto">

        {/* === Sticky band when mobile scrolling (phone number for contact) === */}
        <div className="d-lg-none d-block fixed-bottom bg-secondary text-center p-1">
          <a 
            href={`tel:+4${metaData.gdpr.contactData.contactTel}`} 
            className="fs-4 text-light text-decoration-none"
          >
            {`Comenzi telefonice: ${metaData.gdpr.contactData.contactTel}`}
          </a>
        </div>

        <div className="text-center mt-3">
          <ScrollToButton referrerId="checkout__form" />
        </div>

        {/* ==== Section STOCK ==== */}
        <div className="mt-3 mt-md-4" id={`sectionStock`}>
          <SectionStock 
            totalStock={dataHero.stock.totalStock} 
            availableStock={dataHero.stock.availableStock} 
          />
        </div>

        {/* ==== VIDEO block ==== */}
        <div className="mt-5" id={dataSectionVideo.id}>
          <SectionVideo content={dataSectionVideo} />
        </div>

        {/* ==== CONTENT Sections ==== */}

        <div className="mt-5 mt-xxl-6 mb-3" id={`${dataSection1.id}`}>
          <SectionHorizon content={dataSection1} />
        </div>

        <div className="text-center">
          <ScrollToButton referrerId="checkout__form" />
        </div>

        <div className="mt-5 mt-xxl-6 mb-3" id={`${dataSection2.id}`}>
          <SectionVertic content={dataSection2} />
        </div>

        <div className="text-center">
          <ScrollToButton referrerId="checkout__form" />
        </div>

        {/* <div className="mt-5 mt-xxl-6 mb-3" id={`${dataSection3.id}`}>
          <SectionVertic content={dataSection3} />
        </div> */}

        {/* <div className="text-center">
          <ScrollToButton referrerId="checkout__form" />
        </div> */}

        <div className="mt-5 mt-xxl-6 mb-3" id={`${dataSection4.id}`}>
          <SectionHorizon content={dataSection4} />
        </div>

        <div className="text-center">
          <ScrollToButton referrerId="checkout__form" />
        </div>

        <div className="my-5 my-lg-6" id="reviews">
          <ReviewGroup reviews={dataReviews}/>
        </div>

        {/* ==== FAQs Accordion ==== */}
        <div className="container my-5" id="faqs">

          <h2 className="h2 text-primary text-center mx-3 mx-sm-6 mb-xxxl-4">
            {dataFaqs.title}
          </h2>
          
          <div className="row justify-content-lg-center">
            <div className="col col-lg-8 col-kl-6">
              <div className="accordion accordion-flush">
                {dataFaqs.items.map((item) => {
                  return (
                    <AccordionItem 
                      key={item.itemId}
                      itemId={item.itemId}
                      itemTitle={item.itemTitle}
                      itemContent={item.itemContent}
                    />
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* ==== CHECKOUT Form ==== */}
        <div className="container" id="checkout__form">
          <div className="row">
            <div className="col-sm-10 col-md-8 col-lg-6 col-xxl-4 offset-sm-1 offset-md-2 offset-lg-3 offset-xxl-4">
              <h2 className="my-3 font-weight-bold text-secondary text-center text-uppercase">
                Comandă acum
              </h2>
              <CheckoutForm 
                productIsVariable={productIsVariable}
                productInfo={productInfo}
              />
            </div>
          </div>
        </div>
        
        <div className="container d-none d-lg-block">
          <div className='row'>
            <div className="col-lg-6 col-xxl-4 offset-lg-3 offset-xxl-4">
              <div className='bg-secondary text-center fs-4 text-light mt-5 py-2'>
                {`Comenzi telefonice la ${metaData.gdpr.contactData.contactTel}`}
              </div>
            </div>
          </div>
        </div>

      </main>

    </Layout>
  );
}

export default Home;