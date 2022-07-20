import Link from 'next/link';

import Layout from "../components/layout";
import Hero from '../components/hero';
import BackHomeButton from '../components/back-home-button';

// Import Content data
import metaData from '../data/meta-data.json';
import dataHero from '../data/hero.json';

const Contact = () => {
  return (
    <Layout
      metaData={metaData}
      footerData={metaData}
    >
      <Hero hero={dataHero} />

      <main>

        <div className="container">
          <div className="my-5 mx-md-6 mx-lg-8 mx-xxl-10">

            <h2 className="text-center my-3 my-lg-5">Despre noi</h2>

            <p>
              Îți oferim cele mai bune, utile și interesante produse pentru tine și familia ta. La noi găsești o gamă largă de produse originale, 
              numai bune pentru nevoile și dorințele tale, despre care îți putem spune că sunt de bună calitate și la prețuri de nerefuzat. 
            </p>

            <p className="mt-3">Avantajele cumpărăturilor făcute online de la noi:</p>

            <ul className="no-bullets">
              <li>&#8211; Ai livrare rapidă și ieftină a produselor din stoc prin servicii de curierat;</li>
              <li>&#8211; Oferim Plată Ramburs la livrarea coletului;</li>
              <li>&#8211; Perioadă de testare: returnare de produse în 14 zile, fără nicio obligație.</li>
            </ul>

            <p>Dacă ai comandat și vrei să returnezi produsele, te invităm să consulți secțiunea
            <span>{` `}</span>
              <Link href="/returnare">
                <a className="link-within-text">
                  {metaData.gdpr.refundTag}
                </a>
              </Link>
              <span>, pentru a afla mai multe informații despre cum se face returnarea.</span>
            </p>

            <p>
              Dacă vrei să ne comunici anumite lucruri pe care dorești să le rezolvăm rapid, folosește cu încredere datele noastre de contact de mai jos.
            </p>

            <p>
              Dacă dorești să vezi și alte produse de calitate la reduceri mari, te rugăm să vizitezi și site-ul nostru principal. 
              Poți intra în magazinul nostru online să vezi ce suprize mai avem apăsând butonul de mai jos.
            </p>

            <div className="my-5 text-center">
              <a href={metaData.domain.url} rel="noopener noreferrer nofollow" target="_blank">
                Mergi la {metaData.domain.name}
              </a>

              <style jsx>{`
              a {
                background-color: #f77426; 
                border: none; 
                border-radius: 14px; 
                color: #ffffff; 
                cursor: pointer; 
                display: inline-block; 
                line-height: normal; 
                margin-bottom: 2px; 
                padding: 8px 14px; 
                text-align: center; 
                text-decoration: none; 
                box-shadow: none; 
                overflow-wrap: break-word;
              }
              `}</style>
            </div>

            <div className="text-center">

              <h3 className="h4">CONTACT</h3>
              <p>
                <span>Telefon: </span>
                <a 
                  href={`tel:${metaData.gdpr.contactData.contactTel}`} 
                  className="link-within-text"
                >
                  {metaData.gdpr.contactData.contactTel}
                </a>
              </p>

              <p>
                <span>E-mail: </span>
                <a 
                  href={`mailto:${metaData.gdpr.contactData.contactEmail}`}
                  className="link-within-text"
                >
                  {metaData.gdpr.contactData.contactEmail}
                </a>
              </p>

              <h3 className="h4 mt-5">Program de lucru cu clienții</h3>

              <p>Luni - Vineri: 11:00 - 16:00</p>
            </div>

            <BackHomeButton />
          
          </div>
        </div>
      </main>

    </Layout>
  );
}

export default Contact;