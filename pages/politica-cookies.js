import { useEffect } from 'react';
import Link from 'next/link';

import Layout from "../components/layout";
import Hero from '../components/hero';
import BackHomeButton from '../components/back-home-button';

// Import Content data
import metaData from '../data/meta-data.json';
import dataHero from '../data/hero.json';

const CookiesPolicy = () => {
  
  // Nextjs does not scroll to top after this component has mounted.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout
      metaData={metaData}
      footerData={metaData}
    >
      <Hero hero={dataHero} />

      <main>

        <div className="container">
          <div className="my-5 mx-md-6 mx-lg-8 mx-xxl-10">

            <h2 className="text-center my-3 my-lg-5">Politica cookie-urilor</h2>

            <p>Ultima actualizare 14 august 2021.</p>

            <h3>1. Politica de utilizare a cookie-urilor și a tehnologiilor similare</h3>

            <p>Această politică se referă la cookie-urile și la tehnologiile similare folosite, după caz, în websiteul <strong>{`${metaData.siteName}`}</strong>.</p>

            <p>Folosim cookie-uri pentru următoarele scopuri:</p>

            <ul className="no-bullets">
              <li>&#8211; de funcționare a site-ului,</li>
              <li>&#8211; de analiză a comportamentului vizitatorilor site-ului,</li>
              <li>&#8211; pentru publicitate.</li>
            </ul>

            <p>Această politică se completează cu politica privind protecția datelor personale, care este prezentată în detaliu pe pagina 
              <span>{` `}</span>
              <Link href="/confidentialitate">
                <a className="link-within-text">
                  {metaData.gdpr.privacyTag}
                </a>
              </Link>
              <span>{`.`}</span>
            </p>

            <p>Protecția corespunzătoare a datelor cu caracter personal este un obiectiv important pentru noi. Pentru orice întrebare, vă rugăm să ne contactați la {metaData.gdpr.contactData.contactEmail}.</p>

            <h3>2. Ce sunt cookie-urile?</h3>

            <p>Cookie-ul este un fișier de mici dimensiuni, format din litere și numere, care va fi stocat pe computerul, terminalul mobil sau alte echipamente ale unui utilizator de pe care se accesează internetul. Cookie-ul este instalat prin solicitarea emisă de către terminalul utilizatorului către serverul pe care este găzduit site-ul nostru sau către un server al unei terțe părți.</p>

            <h3>3. La ce sunt folosite cookie-urile?</h3>

            <p>Aceste fișiere fac posibilă în principal recunoașterea terminalului utilizatorului și prezentarea conținutului într-un mod relevant, adaptat preferințelor utilizatorului.</p>

            <p>Cookie-urile asigură utilizatorilor o experiență plăcută de navigare și susțin eforturile noastre de a oferi servicii mai adaptate utilizatorilor, ex: – preferințele în materie de confidențialitate online, coșul de cumpărături sau publicitate relevantă. De asemenea, sunt utilizate în pregătirea unor statistici anonime agregate care ne ajută să înțelegem cum un utilizator beneficiază de paginile noastre de internet, permițându-ne îmbunătățirea structurii și conținutului lor, fără a permite identificarea personală a utilizatorului.</p>

            <h3>4. Ce cookie-uri folosim?</h3>

            <p>Folosim două tipuri de cookie-uri: per sesiune și fixe. Cookie-urile per sesiune sunt fișiere temporare ce rămân în terminalul utilizatorului până la terminarea sesiunii sau închiderea aplicației. Cookie-urile fixe rămân pe terminalul utilizatorului pe o perioadă determinată de parametrii cookie-ului sau până sunt șterse manual de utilizator.</p>

            <h3>5. Cum sunt folosite cookie-urile de către acest site?</h3>

            <p>O vizită pe acest site poate plasa următoarele tipuri de cookie-uri:</p>

            <ul>
              <li> cookie-uri strict necesare pentru funcționarea site-ului</li>
              <li> cookie-uri de analiză</li>
              <li> cookie-uri pentru publicitate.</li>
            </ul>

            <p>Cookie-urile și/sau tehnologiile similare strict necesare sunt esențiale pentru buna funcționare a site-ului, fiind setate pe dispozitivul dumneavoastră la accesarea site-ului sau în urma acțiunilor efectuate în site, după caz. Puteți seta browser-ul dumneavoastră pentru a bloca cookie-urile. În acest caz, însă, anumite secțiuni ale site-ului nu vor funcționa corect. Iar, dacă blocați cookie-urile necesare, nu vor putea funcționa cele mai multe opțiuni ale site-ului .</p>

            <h3>6. Cookie-urile sau tehnologiile similare conțin date personale?</h3>

            <p>Cookie-urile sau tehnologiile similare în sine nu solicită informații cu caracter personal pentru a putea fi utilizate și, în multe cazuri, nici nu identifică personal utilizatorii de internet. Există însă situații când datele personale pot fi colectate prin utilizarea cookie-urilor pentru a facilita anumite funcționalități pentru utilizator sau pentru a oferi utilizatorului o experiență mai adaptată preferințelor sale. Astfel de date sunt criptate într-un mod care face imposibil accesul persoanelor neautorizate la ele.</p>

            <p>
              Ce sunt tehnologiile similare? Există alte tehnologii care pot fi utilizate în aceleași scopuri precum cookie-urile. 
              Site-ul {metaData.siteName} utilizează o tehnologie similară cu cea denumită Local Storage.
            </p>

            <h3>7. Blocare cookie-uri</h3>

            <p>
              În cazul în care doriți sa blocați cookie-urile, unele funcționalități ale site‑ului vor fi oprite. Acest lucru poate genera anumite disfuncționalități sau erori în folosirea site-ului {metaData.siteName}. 
              De exemplu, blocarea cookie-urilor vă poate împiedica să utilizați website-ul nostru la calitate maximă sau să folosiți opțiunile de comandă a produselor.
            </p>

            <p>
              Cele mai multe browsere sunt setate implicit să accepte cookie-uri. Dar aveți posibilitatea să modificați setările pentru a bloca unele sau toate cookie-urile. 
              Puteți preveni sau stopa, accepta sau respinge oricând cookie-urile folosite de site-ul {metaData.siteName} prin modificarea setărilor browser-ului dvs. 
              sau prin ștergerea manuală a cookie-urilor din browser.
            </p>

            <p>Pentru detalii despre cum puteți controla sau șterge cookie-urile din browser, citiți instrucțiunile din meniul „Help”/”Ajutor” al browser-ului dvs. sau de la următoarele linkuri:</p>

            <ul className="no-bullets">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer noopener nofollow">
                  Setări ale cookie-urilor în Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noreferrer noopener nofollow">
                  Setări ale cookie-urilor în Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noreferrer noopener nofollow">
                  Setări ale cookie-urilor în Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noreferrer noopener nofollow">
                  Setări ale cookie-urilor în Internet Explorer
                </a>
              </li>
            </ul>

            <h3>8. Administrarea preferințelor cu privire la plasarea de cookie-uri</h3>

            <p>În general, o aplicație folosită pentru accesarea paginilor web permite salvarea cookie-urilor și/sau a tehnologiilor similare pe terminal în mod implicit. Aceste setări pot fi schimbate în așa fel încât administrarea automată a cookie-urilor să fie blocată de browser-ul web sau utilizatorul să fie informat de fiecare dată când cookie-uri sunt trimise către terminalul său.</p>

            <p>Informații detaliate despre posibilitățile și modurile de administrare a cookie-urilor pot fi găsite în zona de setări a aplicației (browser-ului web). Limitarea folosirii cookie-urilor poate afecta anumite funcționalități ale website-ului.</p>

            <h3>9. De ce sunt cookie-urile și/sau tehnologiile similare importante pentru Internet?</h3>

            <p>Cookie-urile și/sau tehnologiile similare reprezintă un punct central al funcționării eficiente a Internetului. Ele ajută la generarea unei experiențe de navigare prietenoase și adaptate preferințelor și intereselor fiecărui utilizator. Refuzarea sau dezactivarea cookie-urilor poate face unele site-uri sau părți ale site-urilor imposibil de folosit.</p>

            <p>Dezactivarea cookie-urilor nu înseamnă că nu veți mai primi, cu respectarea legislației, publicitate online – ci doar că aceasta nu va mai putea ține cont de preferințele și interesele dvs., evidențiate prin comportamentul de navigare.</p>

            <p>Exemple de întrebuințări importante ale cookie-urilor (care nu necesită autentificarea unui utilizator prin intermediul unui cont):</p>

            <ul>
              <li> Conținut și servicii adaptate preferințelor utilizatorului – categorii de produse și servicii.</li>
              <li> Oferte adaptate intereselor utilizatorilor</li>
              <li> Reținerea parolelor</li>
              <li> Reținerea filtrelor de protecție a copiilor privind conținutul pe Internet (opțiuni family mode, funcții de safe search).</li>
              <li> Limitarea frecvenței de difuzare a reclamelor – limitarea numărului de afișări a unei reclame pentru un anumit utilizator pe un site.</li>
              <li> Furnizarea de publicitate relevantă pentru utilizator.</li>
              <li> Măsurarea, optimizarea și adaptarea caracteristicilor de analiză – cum ar fi confirmarea unui anumit nivel de trafic pe un website, ce tip de conținut este vizualizat și modul cum un utilizator ajunge pe un website (ex: prin motoare de căutare, direct, din alte website-uri etc.). 
                Website-urile derulează aceste analize privitoare la utilizarea lor pentru a-și îmbunătăți serviciile în beneficiul utilizatorilor.</li>
            </ul>

            <h3>10. Securitate și aspecte legate de confidențialitate</h3>

            <p>În general browserele au integrate setări de confidențialitate care furnizează diferite niveluri de acceptare a cookie-urilor, perioada de valabilitate și ștergere automată după ce utilizatorul a vizitat un anumit site.</p>

            <p>Alte aspecte de securitate legate de cookie-uri:</p>

            <ul>
              <li>Particularizarea setărilor browserului în ceea ce privește cookie-urile pentru a reflecta un nivel confortabil pentru dumneavoastră al securității utilizării cookie-urilor.</li>
              <li>Dacă sunteți singura persoană care utilizează computerul, puteți seta, dacă doriți, termene lungi de expirare pentru stocarea istoricului de navigare și a datelor personale de acces.</li>
              <li>Dacă împărțiți accesul la calculator, puteți lua în considerare setarea browserului pentru a șterge datele individuale de navigare de fiecare dată când închideți browserul. Aceasta este o variantă de a accesa site-urile care plasează cookie-uri și de a șterge orice informație de vizitare la închiderea sesiunii de navigare.</li>
            </ul>

            <BackHomeButton />

          </div>
        </div>
      </main>

    </Layout>
  );
}

export default CookiesPolicy;