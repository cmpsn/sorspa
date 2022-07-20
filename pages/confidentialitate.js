import Link from 'next/link';

import Layout from "../components/layout";
import Hero from '../components/hero';
import BackHomeButton from '../components/back-home-button';

// Import Content data
import metaData from '../data/meta-data.json';
import dataHero from '../data/hero.json';

const PrivacyPolicy = () => {
  return (
    <Layout
      metaData={metaData}
      footerData={metaData}
    >
      <Hero hero={dataHero} />

      <main>

        <div className="container">
          <div className="my-5 mx-md-6 mx-lg-8 mx-xxl-10">

            <h2 className="text-center my-5 my-lg-5">Politica de confidențialitate</h2>

            <p>Ultima actualizare 14 august 2021.</p>

            <h3>Cu privire la prelucrarea datelor cu caracter personal</h3>

            <p>
              Considerăm asigurarea dreptului la protecția datelor cu caracter personal ca un angajament fundamental al nostru. 
              Prin urmare dedicam toate resursele și eforturile necesare pentru a prelucra datele dumneavoastră în deplină concordanță cu Regulamentul (UE) 2016/679 
              (“Regulamentul general privind protecția datelor” sau “GDPR”), precum și cu orice altă legislație aplicabilă pe teritoriul României. 
              Întrucât unul dintre principiile esențiale ale acestui cadrul legal îl reprezintă transparența, vă informăm aici despre modul în care colectăm, utilizăm, 
              transferăm și protejăm datele dvs. cu caracter personal atunci când interacționați cu site-ul nostru web în legătură cu produsele și serviciile noastre.
            </p>

            <p>
              Ne rezervăm dreptul de a actualiza și modifica periodic această Politică de Confidențialitate, pentru a reflecta orice modificări 
              ale modului în care prelucrăm datele dumneavoastră cu caracter personal sau orice modificări ale cerințelor legale. 
              Ori de câte ori se vom face modificări, vom afișa pe website-ul nostru versiunea modificată a Politicii de Confidențialitate. 
              Vă rugam așadar să verificați periodic conținutul acestei pagini.
            </p>

            <h3>Cine suntem și cum ne puteți contacta</h3>

            <p>
              Siteul este administrat de {metaData.gdpr.contactData.sellerName}, denumirea comercială a {metaData.gdpr.contactData.sellerName} SRL, 
              persoană juridică de naționalitate română, cu număr de ordine în Registrul Comerțului {metaData.gdpr.contactData.sellerRegCom}, 
              cod unic de înregistrare fiscală {metaData.gdpr.contactData.sellerCUI} (în continuare “{metaData.gdpr.contactData.sellerName}” sau “noi“). 
              În sensul legislației cu privire la protecția datelor, suntem operator atunci când prelucrăm datele dvs cu caracter personal.
            </p>

            <p>Întrucât suntem întotdeauna deschiși să aflăm opiniile dumneavoastră, precum și să vă furnizăm orice informații suplimentare de care ați putea avea nevoie 
              cu privire la prelucrarea datelor dvs, vă încurajăm să contactați 
              Responsabilul {metaData.gdpr.contactData.sellerName} cu protecția datelor la adresa de e-mail {metaData.gdpr.contactData.contactEmail} – 
              cu mențiunea: <em>în atenția Responsabilului {metaData.gdpr.contactData.sellerName} cu protecția datelor</em>.
            </p>

            <h3>Ce categorii de date cu caracter personal prelucrăm</h3>

            <p>
              În general, colectăm datele dvs. cu caracter personal direct de la dumneavoastră, astfel încât aveți controlul asupra tipului de informație pe care ne-o oferiți.
              În cadrul acestui site, primim informații de la dvs în următoarea situație:
            </p>

            <p>Când plasați o comandă, ne furnizați informații precum: <strong>produsul dorit, numele și prenumele, adresa de livrare, detalii de facturare, metoda de plată, număr de telefon etc.</strong></p>

            <p>Putem, de asemenea, să colectăm și să prelucrăm ulterior anumite informații cu privire la comportamentul dvs în timpul vizitării site-ului nostru web. Facem acest lucru pentru a vă personaliza experiența online și a vă pune la dispoziție oferte adaptate profilului dvs. Vă invităm să aflați mai multe detalii în acest sens prin consultarea secțiunii de mai jos privitoare la scopurile prelucrării de date.</p>

            <h3>Ce alte tipuri de date colectăm?</h3>

            <p>Pe site-ul nostru web putem stoca și colecta informații în cookie-uri și tehnologii similare, conform informațiilor prezentate în 
              <span>{` `}</span>
              <Link href="/politica-cookies">
                <a className="link-within-text">
                  {metaData.gdpr.cookiesTag}
                </a>
              </Link>
              <span>{`.`}</span>
            </p>

            <p>Nu colectăm și nu prelucrăm în alt mod date sensibile, incluse de Regulamentul GDPR în categorii speciale de date cu caracter personal. De asemenea, nu dorim să colectăm sau să prelucrăm date ale minorilor care nu au împlinit vârsta de 16 ani.</p>

            <h3>Care sunt scopurile și temeiurile prelucrării datelor</h3>

            <p>Vom utiliza datele dvs. cu caracter personal în următoarele scopuri:</p>

            <h4><em>1. Pentru prestarea serviciilor {metaData.gdpr.contactData.sellerName} în beneficiul dvs.</em></h4>

            <p>Acest scop general poate include, după caz, următoarele:</p>

            <ul className="no-bullets">
              <li>a&#41; Prelucrarea comenzilor, inclusiv preluarea, validarea, expedierea și facturarea acestora;</li>
              <li>b&#41; Soluționarea anulărilor sau a problemelor de orice natură referitoare la o comandă, la bunurile sau serviciile achiziționate;</li>
              <li>c&#41; Returnarea produselor conform prevederilor legale;</li>
              <li>d&#41; Rambursarea contravalorii produselor conform prevederilor legale;</li>
              <li>e&#41; Asigurarea serviciilor de suport, inclusiv oferirea de răspunsuri la întrebările dvs cu privire la comenzile dvs sau la bunurile și serviciile {metaData.gdpr.contactData.sellerName} sau ale partenerilor din {metaData.gdpr.contactData.sellerName}.</li>
            </ul>

            <p>Prelucrarea datelor dvs. pentru aceste scopuri este în cele mai multe cazuri necesară pentru încheierea și executarea unui contract între {metaData.gdpr.contactData.sellerName} și dvs. De asemenea, anumite prelucrări subsumate acestor scopuri sunt impuse de legislația aplicabilă, inclusiv legislația fiscală și contabilă.</p>

            <h4><em>2. Pentru îmbunătățirea serviciilor noastre</em></h4>

            <p>Ne dorim în permanență să vă oferim cea mai bună experiență de cumpărare online. Pentru aceasta, putem colecta și utiliza anumite informații în legătură cu comportamentul dvs. de <em><strong>Cumpărător</strong></em>. Astfel, vă putem invita să completați chestionare de satisfacție subsecvent finalizării unei comenzi. Sau putem desfășura, direct sau cu ajutorul unor parteneri, studii și cercetări de piață.</p>

            <p>Ne întemeiem aceste activități pe interesul nostru legitim de a desfășura activități comerciale, având întotdeauna grijă ca drepturile și libertățile dvs. fundamentale să nu fie afectate.</p>

            <h4><em>3. Pentru marketing</em></h4>

            <h5>Mesaje de marketing</h5>

            <p>Vrem să vă ținem la curent cu privire la cele mai bune oferte pentru produsele/serviciile care vă interesează. În acest sens, vă putem trimite orice tip de mesaj (cum ar fi: e-mail/SMS/telefonic/mobile push/webpush/etc.) conținând:</p>

            <ul className="no-bullets">
              <li>&#8211; informații generale și tematice, </li>
              <li>&#8211; informații cu privire la produse similare sau complementare cu cele pe care le-ați achiziționat, </li>
              <li>&#8211; informații cu privire la oferte sau promoții, </li>
              <li>&#8211; informații referitoare la produse adăugate în secțiunea “Coșul meu” sau secțiunea “Favorite” ori referitor la care ați arătat interes sa le achiziționați,</li>
              <li>&#8211; precum și alte comunicări comerciale cum ar fi cercetări de piață și sondaje de opinie. </li>
            </ul>

            <h5>Reclame personalizate</h5>

            <p>De asemenea, putem afișa recomandări personalizate pe site-ul web și în aplicațiile smartphone. Pentru a vă pune la dispoziție informații de interes pentru dvs., putem folosi anumite date cu privire la comportamentul dvs. de cumpărător (de ex. produsele vizualizate sau adăugate în wishlist sau achiziționate) pentru a vă crea un profil. Ne asigurăm întotdeauna că aceste prelucrări se efectuează cu respectarea drepturilor și libertăților dvs. și că deciziile luate în baza acestora nu au efecte legale asupra dvs. și nu vă afectează similar într-o măsură semnificativă.</p>

            <h5>Retragerea consimțământului</h5>

            <p>În cele mai multe cazuri, ne întemeiem comunicările de marketing pe consimțământul dvs. prealabil. Vă puteți răzgândi și retrage consimțământul în orice moment, prin:</p>

            <ul className="no-bullets">
              <li>&#8211; Accesarea link-ului de dezabonare afișat în cadrul mesajelor pe care le primiți de la noi;</li>
              <li>&#8211; Contactarea directă folosind detaliile de contact de la secțiunea Contact/Despre noi.</li>
            </ul>

            <p>În anumite situații, ne putem baza activitățile de marketing pe interesul nostru legitim de a ne promova și dezvolta activitatea comercială. În orice situație în care folosim informații cu privire la dvs. pentru un interes legitim al nostru, avem grijă și luăm toate măsurile necesare pentru ca drepturile și libertățile dvs. fundamentale să nu fie afectate. Cu toate acestea, ne puteți solicita oricând, prin mijloacele descrise mai sus, să oprim prelucrarea datelor dvs. cu caracter personal în scop de marketing, urmând să dăm curs cererii dvs.</p>

            <h4><em>4. Pentru apărarea intereselor noastre legitime</em></h4>

            <p>Pot exista situații în care vom folosi sau transmite informații pentru a ne proteja drepturile și activitatea comercială. Acestea pot include:</p>
            
            <ul className="no-bullets">
              <li>&#8211; măsuri de protecție a site-ului web și a utilizatorilor săi față de atacuri cibernetice;</li>
              <li>&#8211; măsuri de prevenire și detectare a tentativelor de fraudare, inclusiv transmiterea unor informații către autoritățile publice competente;</li>
              <li>&#8211; măsuri de gestionare a altor riscuri diverse.</li>
            </ul>
            
            <p>Temeiul general al acestor tipuri de prelucrări este interesul nostru legitim de a ne apăra activitatea comercială. Bineînțeles că ne asigurăm că toate măsurile pe care le luăm garantează un echilibru între interesele noastre și drepturile și libertățile dvs. fundamentale.</p>

            <p>De asemenea, în anumite cazuri ne întemeiem prelucrarea pe dispoziții legale, cum ar fi obligația de a asigura paza bunurilor și valorilor prevăzută de legislația aplicabilă în această materie.</p>

            <h3>Cât timp păstrăm datele dvs. cu caracter personal</h3>

            <p>Ca regulă generală, vom stoca datele dvs. cu caracter personal cât timp aveți un cont în platforma {metaData.gdpr.contactData.sellerName}. Puteți să ne solicitați oricând ștergerea anumitor informații sau închiderea contului. Vom da curs acestor solicitări sub rezerva păstrării anumitor informații inclusiv ulterior închiderii contului, în situațiile în care legislația aplicabilă sau interesele noastre legitime o impun.</p>

            <h3>Cui transmitem datele dvs. cu caracter personal</h3>

            <p>După caz, putem transmite sau oferi acces la anumite date cu caracter personal ale dvs. următoarelor categorii de destinatari:</p>

            <ul className="no-bullets">
              <li>&#8211; societăților din cadrul aceluiași grup comercial {metaData.gdpr.contactData.sellerName};</li>
              <li>&#8211; furnizorilor de servicii de curierat;</li>
              <li>&#8211; furnizorilor de servicii de plată/bancare (dacă plățile se fac prin bancă sau cu card bancar);</li>
              <li>&#8211; furnizorilor de servicii de marketing / telemarketing;</li>
              <li>&#8211; furnizorilor de servicii de cercetare de piață;</li>
              <li>&#8211; societăților de asigurare;</li>
              <li>&#8211; furnizorilor de servicii IT;</li>
              <li>&#8211; altor societăți cu care putem dezvolta programe comune de ofertare pe piață a bunurilor și serviciilor noastre.</li>
            </ul>
            <p>În cazul în care ne revine o obligație legală sau dacă este necesar pentru a ne apăra un interes legitim, putem de asemenea divulga anumite date cu caracter personal unor autorități publice.</p>

            <p>Ne asigurăm că accesul la datele dvs. de către terții persoane juridice de drept privat se realizează în conformitate cu prevederile legale privind protecția datelor și confidențialitatea informațiilor, în baza unor contracte ferme încheiate cu aceștia.</p>

            <h3>În ce țări transferăm datele dvs. cu caracter personal</h3>

            <p>În prezent, stocăm și prelucrăm datele dvs. cu caracter personal pe teritoriul României.</p>

            <p>Cu toate acestea, este posibil să transferăm anumite date ale dvs. cu caracter personal unor entități localizate în Uniunea Europeană sau în afara Uniunii, inclusiv în țări cărora Comisia Europeană nu le-a recunoscut un nivel adecvat de protecție a datelor cu caracter personal.</p>

            <p>Vom lua întotdeauna măsuri pentru a ne asigura că orice transfer internațional de date cu caracter personal este gestionat cu atenție cu scopul de a vă proteja drepturile și interesele. Transferurile către furnizorii de servicii și alte părți terțe vor fi întotdeauna protejate prin angajamente contractuale și, după caz, prin alte garanții, cum ar fi clauzele contractuale standard emise de Comisia Europeană sau schemele de certificare, precum Scutul de confidențialitate pentru protecția datelor cu caracter personal transferate din interiorul UE către Statele Unite ale Americii.</p>

            <p>Ne puteți contacta oricând, folosind detaliile de contact expuse mai sus, pentru a afla mai multe informații despre țările în care transferăm datele dvs., precum și garanțiile pe care le-am pus în aplicare cu privire la aceste transferuri.</p>

            <h3>Cum protejăm securitatea datelor dvs. cu caracter personal</h3>

            <p>Ne angajăm să asigurăm securitatea datelor cu caracter personal prin implementarea unor măsuri tehnice și organizatorice adecvate, conform standardelor industriei.</p>

            <p>Transmisia datelor dvs. cu caracter personal se face folosind algoritmi de criptare de ultimă generație și le stocăm pe servere securizate, asigurând în același timp redundanța datelor.</p>

            <p>În ciuda măsurilor luate pentru a proteja datele dvs. cu caracter personal, vă atragem atenția că transmiterea informațiilor prin Internet, în general, sau prin intermediul altor rețele publice, nu este complet sigură. Întotdeauna există riscul ca datele să fie văzute și utilizate de către terțe părți neautorizate. Nu putem fi responsabili pentru astfel de vulnerabilități ale unor sisteme care nu sunt sub controlul nostru.</p>

            <h3>Ce drepturi aveți</h3>

            <p>„Regulamentul general privind protecția datelor” vă recunoaște o serie drepturi în legătură cu datele dvs. cu caracter personal. Puteți solicita accesul la datele dvs. și corectarea oricăror greșeli din fișierele noastre. De asemenea, vă puteți opune la prelucrarea datelor dvs. cu caracter personal. Vă puteți exercita dreptul de a vă plânge autorității de supraveghere competente sau de a vă adresa justiției. După caz, puteți beneficia și de dreptul de a solicita ștergerea datelor dvs. cu caracter personal, dreptul la restricționarea prelucrării datelor dvs. și dreptul la portabilitatea datelor.</p>

            <h4>Aspecte generale</h4>

            <p>Pentru a vă putea exercita drepturile, ne puteți contacta folosind detaliile de contact expuse mai sus. Vă rugăm să rețineți următoarele aspecte dacă doriți să vă exercitați aceste drepturi:</p>

            <p>1. Luăm în serios confidențialitatea înregistrărilor care conțin date cu caracter personal. Din acest motiv, putem da curs cererilor dvs. cu privire la astfel de înregistrări DOAR dacă aveți cont creat pe platforma {metaData.gdpr.contactData.sellerName} și folosiți în corespondența cu noi adresa de e-mail aferentă contului dvs. creat pe {metaData.gdpr.contactData.sellerName}. În caz contrar, ne rezervăm dreptul de a vă verifica identitatea prin solicitarea de informații suplimentare care au ca scop confirmarea identității dvs. </p>

            <p>2. Nu vom solicita o taxă pentru a vă exercita vreun drept în ceea ce privește datele dvs. cu caracter personal. Excepție face cazul în care solicitarea dvs. de acces la informații este nefondată, respectiv repetitivă sau excesivă. În acest caz vom percepe o sumă rezonabilă pentru asemenea circumstanțe. Vă vom informa despre orice onorarii aplicate înainte de a vă soluționa cererea.</p>

            <p>3. Ne propunem să răspundem la orice solicitări valide în termen de maximum o lună, cu excepția cazului în care acest lucru este deosebit de complicat sau dacă ați făcut mai multe solicitări. În acest caz urmează să răspundem în termen de maximum două luni. Înainte de a răspunde solicitări suntem nevoiți să verificăm autenticitatea autorului cererii.</p>

            <p>4. Nu trebuie să respectăm o cerere în cazul în care ar afecta în mod negativ drepturile și libertățile altor persoane vizate.</p>

            <p>Mai multe informații despre fiecare dintre aceste drepturi sunt prezentate mai jos:</p>

            <h4><em>Accesul</em></h4>

            <p>Puteți să ne cereți:</p>

            <ul className="no-bullets">
              <li>&#8211; să confirmăm dacă vă prelucrăm datele cu caracter personal;</li>
              <li>&#8211; să vă punem la dispoziție o copie a acestor date;</li>
              <li>&#8211; să vă oferim alte informații despre datele dvs. cu caracter personal, cum ar fi datele pe care le avem, la ce le folosim, cui i le divulgăm, dacă le transferăm în străinătate și cum le protejăm, cât timp le păstrăm, ce drepturi aveți, cum puteți face o plângere, de unde am obținut datele dvs., în măsura în care informațiile nu v-au fost deja furnizate prin această informare.</li>
            </ul>
            
            <h4><em>Rectificarea</em></h4>

            <p>Ne puteți cere să rectificăm sau să completăm datele dvs cu caracter personal inexacte sau incomplete.</p>

            <p>Este posibil să încercăm să verificăm exactitatea datelor înainte de rectificarea acestora.</p>

            <h4><em>Ștergerea datelor</em></h4>

            <p>Ne puteți cere să vă ștergem datele cu caracter personal, dar numai în cazul în care:</p>

            <ul className="no-bullets">
              <li>&#8211; acestea nu mai sunt necesare pentru scopurile pentru care au fost colectate;</li>
              <li>&#8211; v-ați retras consimțământul (în cazul în care prelucrarea datelor se baza pe consimțământ);</li>
              <li>&#8211; dați curs unui drept legal de a vă opune;</li>
              <li>&#8211; acestea au fost prelucrate ilegal;</li>
              <li>&#8211; ne revine o obligație legală în acest sens.</li>
            </ul>

            <p>Nu avem obligația de a ne conforma solicitării de ștergere a datelor dvs. cu caracter personal în cazul în care prelucrarea datelor dvs. cu caracter personal este necesară:</p>

            <ul className="no-bullets">
              <li>&#8211; pentru respectarea unei obligații legale;</li>
              <li>&#8211; pentru constatarea, exercitarea sau apărarea unui drept în instanță.</li>
            </ul>

            <p>Există și alte situații prevăzute de „Regulamentul general privind protecția datelor” în care nu suntem obligați să respectăm solicitarea dvs. de ștergere a datelor, însă cele două de mai sus sunt cele mai probabile situații în care avem dreptul sau obligația legale de a refuza această solicitare.</p>

            <h4><em>Restricționarea prelucrării datelor </em></h4>

            <p>Ne puteți cere să restricționăm prelucrarea datelor cu caracter personal, dar numai în cazul în care:</p>

            <ul className="no-bullets">
              <li>&#8211; acuratețea lor este contestată (a se vedea secțiunea referitoare la rectificare), pentru a ne permite să verificăm acuratețea acestora;</li>
              <li>&#8211; prelucrarea este ilegală, dar nu doriți ca datele să fie șterse;</li>
              <li>&#8211; acestea nu mai sunt necesare pentru scopurile pentru care au fost colectate, dar dvs aveți nevoie de ele pentru a constata, a exercita sau a apăra un drept în instanță;</li>
              <li>&#8211; v-ați exercitat dreptul de a vă opune, iar verificarea dacă drepturile noastre prevalează este în desfășurare.</li>
            </ul>

            <p>Putem continua să folosim datele dvs. cu caracter personal în urma unei solicitări de restricționare, în cazul în care:</p>

            <ul className="no-bullets">
              <li>&#8211; avem consimțământul dvs.;</li>
              <li>&#8211; pentru a constata, exercita sau asigura apărarea unui drept în instanță;</li>
              <li>&#8211; pentru a proteja drepturile {metaData.gdpr.contactData.sellerName} sau ale altei persoane fizice sau juridice.</li>
            </ul>

            <h4><em>Portabilitatea datelor</em></h4>

            <p>Ne puteți cere să vă furnizăm datele cu caracter personal într-un format structurat, utilizat în mod curent și care poate fi citit automat, sau puteți solicita ca acesta să fie „portat” direct către un alt operator de date, dar în fiecare caz numai dacă:</p>

            <ul className="no-bullets">
              <li>&#8211; prelucrarea se bazează pe consimțământul dvs. sau pe încheierea sau executarea unui contract cu dvs;</li>
              <li>&#8211; prelucrarea se face prin mijloace automate.</li>
            </ul>

            <h4><em>Opoziția</em></h4>

            <p>Vă puteți opune în orice moment, din motive legate de situația particulară în care vă aflați, prelucrării datelor dvs. cu caracter personal în temeiul interesului nostru legitim, în cazul în care considerați că drepturile și libertățile dvs. fundamentale prevalează față de acest interes.</p>

            <p>De asemenea, vă puteți opune oricând prelucrării datelor dvs. <em>în scop de marketing direct</em> (inclusiv crearea de profiluri), fără a invoca vreun motiv, caz în care vom înceta în cel mai scurt timp posibil această prelucrare.</p>

            <h4><em>Luarea de decizii automate</em></h4>

            <p>Puteți cere să nu faceți obiectul unei decizii bazate exclusiv pe prelucrarea automată, dar numai atunci când decizia respectivă:</p>

            <ul className="no-bullets">
              <li>&#8211; produce efecte juridice cu privire la dvs.;</li>
              <li>&#8211; vă afectează în alt mod similar și într-o măsură semnificativă.</li>
            </ul>

            <p>Acest drept <em><strong>nu se aplică</strong></em> în cazul în care decizia la care s-a ajuns în urma luării automate a deciziilor:</p>

            <ul className="no-bullets">
              <li>&#8211; ne este necesară pentru a încheia sau a derula un contract cu dvs.;</li>
              <li>&#8211; este autorizată prin lege și există garanții adecvate pentru drepturile și libertățile dvs.;</li>
              <li>&#8211; se bazează pe consimțământul dvs. explicit.</li>
            </ul>

            <h4><em>Plângeri</em></h4>

            <p>
              Aveți dreptul să depuneți o plângere la autoritatea de supraveghere cu privire la prelucrarea datelor dvs. cu caracter personal. 
              În România, datele de contact ale autorității de supraveghere pentru protecția datelor sunt următoarele:
            </p>

            <p>
              Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal, B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, cod poștal 010336, București, România, 
              Telefon: +40.318.059.211 sau +40.318.059.212; E-mail: anspdcp@dataprotection.ro
            </p>

            <p>
              <em>Fără a vă afecta dreptul dvs de a contacta în orice moment autoritatea de supraveghere, vă rugăm să ne contactați pe noi în prealabil și vă asigurăm că 
              vom depune toate eforturile necesare pentru a rezolva orice problemă pe cale amiabilă.</em>
            </p>

            <p>
              Reamintim faptul ca puteți să contactați în orice moment Responsabilul {metaData.gdpr.contactData.sellerName} cu protecția datelor 
              la adresa de e-mail {metaData.gdpr.contactData.contactEmail} – 
              cu mențiunea: <em>în atenția Responsabilului {metaData.gdpr.contactData.sellerName} cu protecția datelor.</em>
            </p>

            <BackHomeButton />

          </div>
        </div>
      </main>

    </Layout>
  );
}

export default PrivacyPolicy;