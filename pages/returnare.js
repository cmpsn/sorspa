import Layout from "../components/layout";
import Hero from '../components/hero';
import BackHomeButton from '../components/back-home-button';

// Import Content data
import metaData from '../data/meta-data.json';
import dataHero from '../data/hero.json';

const Refund = () => {

  return (
    <Layout
      metaData={metaData}
      footerData={metaData}
    >
      <Hero hero={dataHero} />

      <main>

        <div className="container">
          <div className="my-5 mx-md-6 mx-lg-8 mx-xxl-10">

            <h2 className="text-center my-5 my-lg-5">Returnare produse</h2>

            <h3>Condițiile returnării</h3>
            <p>
              Produsele achiziționate la distanță se pot returna conform O.U.G. 34/2014. 
              Consumatorul are dreptul să notifice în scris comerciantul că renunță la cumpărare, fără penalități și fără invocarea unui motiv, 
              în termen de 14 zile de la primirea produsului. (Sau, în cazul prestărilor de servicii, în 14 zile de la încheierea contractului).
            </p>
            <p>
              Returnarea produselor se va face pe cheltuiala clientului, în termen de 14 zile de la denunțarea contractului. 
              Se recomandă utilizarea aceluiași serviciu de transport utilizat pentru recepționarea produselor. 
              Vanzatorul va înapoia contravaloarea comenzii în cel mai scurt timp posibil de la primirea produsului returnat. 
              Suma înapoiată cât și condițiile de returnare nu includ cheltuielile de transport. 
              Costul de transport al curierului în cazul returului produsului/ produselor va fi suportat în totalitate de client. 
              Produsele pot fi returnate doar prin curier rapid.
            </p>
            
            <h3>Contractul de vânzare</h3>
            <p>Definitia contractului de vanzare (art. 2, 5.) &#8211; Orice contract in temeiul caruia profesionistul transfera sau se angajeaza sa transfere proprietatea asupra unor produse catre consumator, iar consumatorul plateste sau se angajeaza sa plateasca pretul acestora, inclusiv orice contract care are drept obiect atat produse, cat si servicii.</p>
            <p>Incheierea contractului are loc in momentul emiterii facturii fiscale si nu la lansarea comenzii sau emiterea confirmarii automate de primire a acesteia.</p>
            <p>Art. 12 mentioneaza ca exercitarea dreptului de retragere pune capat obligatiilor partilor contractuale. Produsul returnat trebuie sa fie in aceeasi stare in care a fost livrat (in ambalajul original cu toate accesoriile, cu etichetele intacte si documentele care l-au insotit). Nu se accepta pentru returnare produsele care prezinta modificari fizice, lovituri, ciobiri, zgarieturi, socuri, urme de folosire excesiva si/sau interventii neautorizate etc.</p>
            <p>Din motive de igienă, produsele precum costumele de baie, bodystocking/catsuit, bikinii, dresurile, sosetele și, în general, orice fel de produse care pot afecta igiena personală NU se pot returna.</p>
            
            <h3>Drepturile și obligațiile consumatorului</h3>
            <p>Prevederile OUG 34/2014 se aplica doar consumatorului definit ca orice persoana fizica sau grup de persoane fizice constituite in asociatii, asa cum sunt definite la art. 2 pct. 2 OG 21/1992 privind protectia consumatorilor, republicata, cu modificarile si completarile ulterioare.</p>
            <p>Consumatorul este responsabil doar in ce priveste diminuarea valorii produselor rezultata din manipularea acestora, diferit de ceea ce este necesar pentru determinarea naturii, caracteristicilor si functionarii produselor. In conformitate cu Directiva 2011/83/UE, punctul (47) din prezentare, pentru a stabili natura, caracteristicile si modul de functionare a bunurilor, consumatorul ar trebui sa le manuiasca si sa le inspecteze in acelasi mod in care i s-ar permite sa-o faca intr-un magazin. De exemplu, consumatorul ar trebui doar sa probeze un articol de imbracaminte, nu sa il poarte.</p>
            
            <h3>Procedura de returnare</h3>
            <p className="mt-3 fw-bold">Pentru returnare trebuie sa ne contactati astfel:</p>

            <div>
              <p>
                <span>Prin e-mail la: </span>
                <a 
                  href={`mailto:${metaData.gdpr.contactData.contactEmail}`}
                  className="link-within-text"
                >
                  {metaData.gdpr.contactData.contactEmail}
                </a>
              </p>

              <p>
                <span>Telefon: </span>
                <a 
                  href={`tel:${metaData.gdpr.contactData.contactTel}`} 
                  className="link-within-text"
                >
                  {metaData.gdpr.contactData.contactTel}
                </a>
              </p>

              <p className="mt-3 fw-bold">Program de lucru cu clienții</p>

              <p>Luni - Vineri: 11:00 - 16:00</p>
            </div>

            <BackHomeButton />

          </div>
        </div>
      </main>

    </Layout>
  );
}

export default Refund;