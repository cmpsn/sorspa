import Link from 'next/link';

import Layout from "../components/layout";
import Hero from '../components/hero';
import BackHomeButton from '../components/back-home-button';

// Import Content data
import metaData from '../data/meta-data.json';
import dataHero from '../data/hero.json';

const Terms = () => {
  return (
    <Layout
      metaData={metaData}
      footerData={metaData}
    >
      <Hero hero={dataHero} />

      <main>

        <div className="container">
          <div className="my-5 mx-md-6 mx-lg-8 mx-xxl-10">

            <h2 className="text-center my-5 my-lg-5">Termeni și condiții de utilizare</h2>

            <p>Ultima actualizare 14 august 2021.</p>

            <p>Prezentul document prin conținutul său pune la dispoziția terților utilizatori Regulamentul privind termenii si condițiile de utilizare a site-ului <strong>{`${metaData.siteName}`}</strong>.</p>
            <p>
              Site-ul este proprietatea {metaData.gdpr.contactData.sellerName}, care este denumirea comercială a {metaData.gdpr.contactData.sellerName} SRL, persoană juridică de naționalitate română, 
              cu număr de ordine în Registrul Comerțului {metaData.gdpr.contactData.sellerRegCom}, cod unic de înregistrare fiscală {metaData.gdpr.contactData.sellerCUI} 
              (în continuare “{metaData.gdpr.contactData.sellerName}” sau “noi“).
            </p>
            <p>
              Utilizarea site-ului (incluzand accesul, navigarea si cumpararea produselor de pe acest site) constituie un acord implicit de respectare a termenilor si conditiilor 
              enuntate in cuprinsul prezentului document, cu toate efectele si consecintele ce decurg din aceasta.
            </p>
            <p>
              Administratorul site-ului isi rezerva dreptul de a modifica in orice moment continutul acestui acord, 
              fara notificarea prealabila a persoanelor care il utilizeaza, denumite in continuare „Utilizatori”. Utilizatorii vor avea acces permanent la 
              termenii si conditiile de utilizare a serviciilor, pentru a le putea consulta in orice moment.
            </p>

            <p>
              Politica privind protecția datelor personale este prezentată în detaliu la pagina 
              <span>{` `}</span>
              <Link href="/confidentialitate">
                <a className="link-within-text">
                  {metaData.gdpr.privacyTag}
                </a>
              </Link>
              <span>{`.`}</span>
            </p>

            <p>
              De asemenea, politica noastră referitoare la stocarea și colectarea de informații prin intermediul cookie-urilor și altor tehnologii similare este prezentată în detaliu 
              la pagina 
              <span>{` `}</span>
              <Link href="/politica-cookies">
                <a className="link-within-text">
                  {metaData.gdpr.cookiesTag}
                </a>
              </Link>
              <span>{`.`}</span>
            </p>
            
            <h3>Termeni utilizați</h3>
            <p>Vanzator – {metaData.gdpr.contactData.sellerName} SRL.</p>
            <p>Cumparator – poate fi orice persoana fizica care are varsta peste 16 ani sau persoana juridica sau orice entitate juridica care isi face un Cont in Site si/sau care efectueaza o Comanda.</p>
            <p>
              Client – poate fi orice persoana fizica care are varsta peste 16 ani sau persoana juridica care are sau obtine acces la continutul site-ului {metaData.siteName}, 
              prin orice mijloc de comunicare pus la dispozitie de catre {metaData.gdpr.contactData.sellerName} (electronic, telefonic, etc) sau in baza unui acord de utilizare existent intre {metaData.gdpr.contactData.sellerName} si 
              acesta, indiferent daca accesul s-a facut prin crearea si utilizarea unui Cont sau prin folosirea site-ului fara crearea unui Cont personalizat.
            </p>
            <p>Utilizator – orice persoana fizica care are varsta peste 16 ani sau persoana juridica inregistrata pe Site, care, prin finalizarea procesului de creare a Contului, si-a dat acordul cu privire la clauzele specifice site-ului din sectiunea Termeni si Conditii Generale.</p>
            <p>Nickname – pseudonim prin care un anumit Utilizator/Client/Cumparator poate adauga Continut pe Site. Nickname-ul este asociat informatiilor din Site ale Utilizatorului/Clientului/Cumparatorului sub denumirea de “Nume Utilizator”.</p>
            <p>Cont – sectiunea din Site formata dintr-o adresa de e-mail si o parola care permite Cumparatorului transmiterea Comenzii si care contine informatii despre Client/Cumparator si istoricul Cumparatorului in Site (Comenzi, facturi fiscale, garantii Bunuri, etc.). Utilizatorul este responsabil si se va asigura ca toate informatiile introduse la crearea Contului sunt corecte, complete si actualizate.</p>
            <p>Favorite– sectiune din Cont care permite Cumparatorului/Utilizatorului sa isi creeze liste cu Bunuri si Servicii pe care doreste sa le urmareasca in vederea unei eventuale achizitii folosindu-se de serviciul oferit de catre Vanzator de urmarire a Bunurilor si Serviciilor prin primirea de Comunicari Comerciale din partea acestuia.</p>
            <p>Favorite/Whishlist/Lista de preferinte – sectiunea in care Cumparatorul/Utilizatorul poate adauga Bunuri sau Servicii pe care doreste sa le urmareasca in vederea unei eventuale achizitii si pe care, ulterior, le poate sterge sau le poate adauga in cosul de cumparaturi („Cosul meu”).</p>
            <p>Cosul meu – sectiunecare permite Cumparatorului/Utilizatorului sa adauge Bunuri sau Servicii pe care doreste sa le achizitionezela momentul adaugarii sau la un moment ulterior; in cazul in care Bunurile sau Serviciile nu sunt achizitionate la momentul adaugarii prin efectuarea Comenzii, Cumparatorul/Utilizatorul va beneficia de serviciul oferit de catre Vanzator de urmarire a Bunurilor si Serviciilor prin primirea de Comunicari Comerciale din partea acestuia.</p>
            <p>{`Site – magazinul online gazduit la adresa web ${metaData.metaUrl} si subdomeniile acestuia.`}</p>
            <p>Comanda – un document electronic ce intervine ca forma de comunicare intre Vanzator si Cumparator prin care Cumparatorul transmite Vanzatorului, prin intermediul Site-ului intentia sa de a achizitiona Bunuri si Servicii de pe Site.</p>
            <p>Bunuri si Servici<strong>i</strong> – orice produs sau serviciu listat pe Site, inclusiv produsele si serviciile mentionate in Comanda, care urmeaza a fi furnizate de catre Vanzator, Cumparatorului ca urmare a Contractului incheiat.</p>
            <p>Campanie – actiunea de a expune in scop comercial, un numar de Bunuri si/sau Servicii avand un stoc limitat, pentru o perioada limitata de timp stabilita de catre Vanzator.</p>
            <p>Contract – reprezinta contractul la distanta incheiat intre Vanzator si Cumparator, fara prezenta fizica simultana a Vanzatorului si a Cumparatorului.</p>
            <p>Continut:</p>
            <ul className="no-bullets">
              <li>– toate informatiile de pe Site care pot fi vizitate, vizualizate sau accesate prin utilizarea unui echipament electronic;</li>
              <li>– continutul oricarui e-mail trimis Cumparatorilor de catre Vanzator prin mijloace electronice si/sau orice alt mijloc de comunicare disponibil;</li>
              <li>– orice informatie comunicata prin orice mijloc de catre un angajat/colaborator al Vanzatorului catre Cumparator, conform informatiilor de contactare, specificate sau nu de catre acesta;</li>
              <li>– informatii legate de Bunurile si/sau Serviciile si/sau tarifele practicate de Vanzator intr-o anumita perioada;</li>
              <li>– informatii legate de Bunurile si/sau Serviciile si/sau tarifele practicate de catre un tert cu care Vanzatorul are incheiate contracte de parteneriat, intr-o anumita perioada;</li>
              <li>– date referitoare la Vanzator, sau alte date privilegiate ale acestuia.</li>
            </ul>
            <p>Intrebare – formula de adresare catre alti Utilizatori/Clienti/Cumparatori cu scopul de a obtine informatii despre Bunurile sau Serviciile din pagina respectiva.</p>
            <p>Raspuns – informatie scrisa care este transmisa Utilizatorului/Clientului/Cumparatorului care a adresat o Intrebare in Site, in pagina unui anumit Bun. Raspunsul reprezinta o explicatie oferita de un Utilizator/Client/Cumparator unui alt Utilizator/Client/Cumparator in cadrul unei discutii.</p>
            <p>Comunicari Comerciale – orice tip de mesaj trimis (cum ar fi: e-mail/SMS/telefonic/mobile push/webpush/etc.) continand informatii generale si tematice, informatii cu privire la produse similare sau complementare cu cele pe care le-a achizitionat Cumparatorul, informatii cu privire la oferte sau promotii, informatii referitoare la Bunuri si Servicii adaugate in sectiunea “Contul meu/Cosul meu” sau in Formularul de Comanda, precum si alte comunicari comerciale cum ar fi cercetari de piata si sondaje de opinie.</p>
            <p>Tranzactie – incasarea sau rambursarea unei sume rezultata din vanzarea unui Bun si/sau Serviciu de catre {metaData.gdpr.contactData.sellerName} Cumparatorului, indiferent de modalitatea de livrare.</p>
            <p>Taxa de timbru verde – valoarea exprimata in lei, platita de catre Vanzator catre societatea autorizata cu preluarea operatiunilor de colectare, transport si valorificare/reciclare a deseurilor echipamentelor electrice si electronice, astfel cum este prevazut de legislatia in vigoare.</p>
            
            <h3>Documente contractuale</h3>
            <p>1. Prin inregistrarea unei Comenzi pe Site, Cumparatorul este de acord cu forma de comunicare (telefonic sau e-mail) prin care Vanzatorul isi deruleaza operatiunile comerciale.</p>
            <p>2. Notificarea primita de catre Cumparator imediat dupa efectuarea Comenzii are rol de informare si nu reprezinta acceptarea Comenzii. Aceasta notificare se face electronic (prin e-mail), prin SMS sau telefonic.</p>
            <p>3. Pentru motive justificate, Vanzatorul isi rezerva dreptul de a modifica cantitatea Bunurilor si/sau Serviciilor din Comanda. Daca modifica cantitatea de Bunuri si/sau Servicii din Comanda va anunta Cumparatorul la adresa de e-mail sau la numarul de telefon puse la dispozitia Vanzatorului la efectuarea Comenzii si va returna suma achitata.</p>
            <p>4. Contractul se considera incheiat intre Vanzator si Cumparator in momentul primirii de catre Cumparator de la Vanzator, prin intermediul postei electronice si/sau SMS, a notificarii explicite de Expediere a Comenzii.</p>
            
            <h3>Politica de vânzare online</h3>
            <p>1. Accesul in vederea efectuarii unei Comenzii ii este permis oricarui Utilizator/Cumparator.</p>
            <p>
              Pentru motive justificate {metaData.gdpr.contactData.sellerName} isi rezerva dreptul de a restrictiona accesul Utilizatorului/ Cumparatorului in vederea efectuarii unei Comenzi si/sau la unele din modalitatile de plata acceptate, 
              in cazul in care considera ca in baza conduitei sau a activitatii Utilizatorului/ Cumparatorului pe Site, actiunile acestuia ar putea prejudicia in vreun fel {metaData.gdpr.contactData.sellerName}. 
              In oricare dintre aceste cazuri, Utilizatorul/ Cumparatorul se poate adresa {metaData.gdpr.contactData.sellerName} in scris la 
              adresa de e-mail {metaData.gdpr.contactData.contactEmail}, pentru a fi informat cu privire la motivele care au condus la aplicarea masurilor mentionate mai sus.
            </p>
            <p>2. Comunicarea cu Vanzatorul se poate realiza prin interactiunea directa cu acesta sau prin adresele mentionate la sectiunea “Contact” (sau “Despre noi”) din Site. Vanzatorul are libertatea de a gestiona informatiile primite fara a fi nevoit sa aduca justificari pentru aceasta.</p>
            <p>3 In cazul unui volum de trafic neobisnuit de mare provenit din partea unei retele de internet, {metaData.gdpr.contactData.sellerName} isi rezerva dreptul de a cere Utilizatorilor/Cumparatorilor introducerea manuala a codurilor de validare de tip „captcha”, in vedere protejarii informatiei din cadrul Site-ului.</p>
            <p>4. {metaData.gdpr.contactData.sellerName} poate publica pe Site informatii despre Bunuri si/sau Servicii si/sau promotii practicate de catre acesta sau de catre oricare alt tert cu care {metaData.gdpr.contactData.sellerName} are incheiate contracte de parteneriat, intr-o anumita perioada de timp si in limita stocului disponibil.</p>
            <p>5. Toate tarifele aferente Bunurilor si/sau Serviciilor prezentate pe Site sunt exprimate in lei (RON) si includ TVA.</p>
            <p>6. In conditiile prevazute de lege, pretul Bunurilor electronice afisat pe Site include Taxa de timbru verde.</p>
            <p>7. In cazul platilor online Vanzatorul nu este/nu poate fi facut responsabil pentru niciun alt cost suplimentar suportat de Cumparator, incluzand dar nelimitandu-se la comisioane de conversie valutara aplicate de catre banca emitenta a cardului acestuia, in cazul in care moneda de emitere a acestuia difera de RON. Responsabilitatea pentru aceasta actiune o poarta numai Cumparatorul.</p>
            <p>8. Toate informatiile folosite pentru descrierea Bunurilor si/sau a Serviciilor disponibile pe Site (imagini statice, imagini dinamice, prezentari multimedia etc.) nu reprezinta o obligatie contractuala din partea Vanzatorului, acestea fiind utilizate exclusiv cu titlu de prezentare.</p>
            
            <h3>Continutul site-ului si drepturile de proprietate intelectuala</h3>
            <p>Continutul acestui site nu poate fi utilizat, reprodus, distribuit, transmis, expus, in alte scopuri decat cele expres si legal permise. Extragerea oricaror informatii urmata de orice utilizare in scop comercial care depaseste sfera copiei private reglementate de lege sau pentru vanzare ori licentiere si fara a avea in prealabil un consimtamant scris al titularilor drepturilor de proprietate constituie o incalcare a termenilor si conditiilor.</p>
            <p>Sunteti de asemenea de acord sa nu afectati si interferati in vreun fel cu elementele de securitate ale site-ului, cu elementele care previn sau restrictioneaza utilizarea, copierea unui continut sau elemente care intaresc limitele de utilizare a siteului sau a continutului acestuia.</p>
            
            <h3>Dreptul consumatorilor de denunțare unilaterala a contractului</h3>
            <p>Va rugam sa va asigurati ca ati verificat specificatiile produsului si compatibilitatea acestuia prin vizitarea paginii producatorului inainte de a-l cumpara. Raporturile comerciale dintre cumparator si {metaData.gdpr.contactData.sellerName} sunt reglementate oficial de Ordonanta Guvernului 130/2000, privind protectia consumatorilor la incheierea si executarea contractelor la distanta.</p>
            <p><strong>Consumatorul are dreptul sa notifice in scris comerciantului ca renunta la cumparare, fara penalitati si fara invocarea unui motiv, in termen de 14 zile lucratoare de la primirea produsului sau, in cazul prestarilor de servicii, de la incheierea contractului.</strong></p>
            <p><strong>Din motive de igienă, produsele: costume de baie, bodystocking/catsuit, bikinii, dresurile, sosete, și în general orice fel de produse care pot afecta igiena personală, NU se pot returna.</strong></p>
            <p>Administratorul site-ului {metaData.siteName} face eforturi permanente pentru a pastra acuratetea informatiilor de pe site, insa uneori acestea pot contine inadvertente (specificatiile sau pretul produselor modificate de catre producator fara preaviz sau viciate de erori de operare). <strong>Atentie: fotografiile sau materialele video de prezentare au caracter informativ si pot contine accesorii care nu sunt incluse in pachetele standard.</strong></p>
            
            <h3>Garanția produselor comercializate</h3>
            <p><strong>Condiții de acordare a garanției:</strong></p>
            <p>1. Garanția este valabilă în baza facturii.</p>
            <p>2. Termenul de garanție al unui produs este valabil pe perioada duratei medii de utilizare a produsului. Pentru produsele sau piesele care NU sunt expuse uzurii normale, termenul de garanție oferit este de 12 luni de la data cumpărării produsului sau, în cazul în care există o garanție extinsă (mai mare de 12 luni) oferită de producător, termenul de garanție valabil este cel oferit de producător.</p>
            <p>3. Garanția se acordă conform legislației române în vigoare la data cumpărării, se aplică numai dacă produsul este folosit corespunzător și este valabilă numai însoțită de numărul comenzii și dovada plății produsului (factura și/sau chitanța curier).</p>
            <p>4. Garanția furnizata nu afecteaza drepturile statuale ale consumatorului prin legislatia aplicabila in vigoare (Legea 449/2003; OG 21/1992) si nici drepturile consumatorului in raport cu un dealer, care decurg din contractul de vanzare-cumparare.</p>
            <p>5. In cazul defectării <strong>în condiții normale de utilizare</strong>, pe durata perioadei de garanție, produsul se va repara sau înlocui gratuit.</p>
            <p>6.<strong> Situații care duc la ieșirea din garanție a produsului</strong>:</p>
            <ul className="no-bullets">
              <li>– Nerespectarea condițiilor de manipulare, transport, păstrare, instalare, exploatare și întreținere;</li>
              <li>– Produsul prezintă deteriorări cauzate de accidente mecanice, lovituri, șocuri, pătrunderi de lichide, expuneri la foc, utilizarea greșită sau neglijentă, schimbări voite ale stării produsului, păstrarea în condiții improprii;</li>
              <li>– Intervenții executate de către persoane neautorizate.</li>
            </ul>
            <p>7. În situația trimiterii produsului spre aducere la conformitate, perioada de garanție se prelungește odată cu timpul scurs de la data predării produsului de către client pana la data returnării altui produs înlocuitor către client.</p>
            <p>8. În cazul constatării neconformității produsului primit, cumpărătorul va trebui sa înștiințeze personalul nostru printr-una din metodele de contact afișate pe site. Înștiințarea va trebui sa conțină numele produsului și o modalitate prin care se poate identifica comanda (număr de telefon, adresă de e-mail a cumpărătorului etc.). Un angajat va prelua cererea dvs. și veți fi contactat telefonic.</p>
            <p>Produsul trebuie trimis la sediul societatii noastre sau la punctul de lucru. Perioada maxima de solutionare a cererii legate de garantie este de 15 zile calendaristice.</p>
            <p>9. Nu putem prelua expedierile produselor aflate in garanție daca nu ne înștiințați în prealabil de acest lucru, anterior expedierii. Inștiințarea vanzatorului se face conform legii înainte de expediere produselor aflate în garanție spre a fi înlocuite sau reparate. Vă rugăm să ne înștiințați prin modalitățile puse la dispozitie pe site (Formular de contact disponibil pe site &#8211; în meniul Informatii, telefonic la numărul afișat pe site sau prin e-mail la adresa afișată pe site).</p>
            <p>10, Vânzătorul nu poate fi facut raspunzător pentru eventualele daune, pierderi de date sau alte defecțiuni de orice natură apărute in urma utilizării necorespunzatoare a produselor comercializate.</p>
            <p>11. La uneltele cu motor pe benzina garanția se acorda pe urmatoarele piese: Modul de aprindere; carburator; motor; iar la uneltele cu motor electric, garanția se acorda pe partea electrică a acestora. Restul sunt considerate piese uzabile care depind de modul de utilizare a acestora.</p>
            <p>12. În cazul oricărui produs, garanția nu se aplică la componentele expuse uzurii normale în timpul folosirii produsului de către cumpărător.</p>
            
            <h3>Frauda</h3>
            <p>
              In scopul accesarii si utilizarii anumitor sectiuni ale website-ului poate fi necesara crearea unui cont personal. Prin prezenta declarati ca va asumati integral responsabilitatea pentru toate si oricare dintre activitatile realizate prin intermediul contului pe care il deschideti pe website si, in consecinta, va sfatuim sa asigurati securitatea parolei contului sau a altor date de acces. In cazul in care securitatea contului pe care il detineti este compromisa, trebuie sa anuntati imediat administratorul site-ului. 
              {metaData.gdpr.contactData.sellerName} nu este responsabil pentru daunele care va sunt cauzate sau care sunt cauzate tertilor de orice fel, prin utilizarea neautorizata a contului.\
            </p>
            
            <h3>Drept aplicabil</h3>
            <p>Prin folosirea site-ului <strong>{`${metaData.siteName}`}</strong>, utilizatorul se declară de acord asupra faptului că legile române vor guverna Termenii și condițiile de utilizare și că orice dispută de orice fel care ar putea sa apară între utilizatori și administratorii {metaData.gdpr.contactData.sellerName} sau asociații/partenerii/afiliații acestuia. În cazul unor eventuale conflicte se va încerca mai întâi rezolvarea acestora pe cale amiabilă, iar dacă rezolvarea pe cale amiabilă nu va fi posibilă, conflictul va fi soluționat în instanță, în conformitate cu legile române în vigoare.</p>
            
            <h3>Disponibilitatea serviciului</h3>
            <p>Administratorul isi rezerva dreptul de a modifica structura si interfata oricarei pagini sau subpagini a site-ului <strong>{`${metaData.siteName}`}</strong> in orice moment si la orice interval de timp liber ales.  De asemenea, administratorul site-ului are dreptul de a intrerupe temporar sau permanent, partial sau in totalitate serviciile puse la dispozitia publicului prin intermediul acestui website, fara vreo notificare prealabila individuala sau generala.</p>
            
            <h3>Exonerarea de răspundere</h3>
            <p>
              {metaData.gdpr.contactData.sellerName} nu garanteaza ca site-ul, serverele pe care este gazduit sau e-mailurile trimise de {metaData.gdpr.contactData.sellerName} nu contin virusi sau alte componente informatice cu caracter potential daunator. 
              Nu garantează nici că site-ul nu contine erori, omisiuni, defectiuni, intarzieri sau intreruperi in operare sau transmitere, caderi de linie sau orice alti factori similari. 
              Utilizatorul foloseste site-ul pe riscul propriu. {metaData.gdpr.contactData.sellerName} este liber de orice raspundere pentru eventualele daune directe sau indirecte cauzate de utilizarea sau accesarea/vizitarea site-ului sau ca urmare a utilizarii informatiilor de pe site. 
              {metaData.gdpr.contactData.sellerName} nu este raspunzatoare de erorile sau omisiunile care pot interveni in redactarea sau prezentarea materialelor de pe site.
            </p>
            <p><strong>{metaData.gdpr.contactData.sellerName} isi rezerva dreptul de a anula comenzile</strong> pentru produse si servicii care sunt afisate pe site ca urmare a unor erori tehnice, sau care, din cauza unor<strong> erori tehnice prezinta preturi evident eronate/derizorii pentru produse.</strong></p>
            <p>
              Daca aveti intrebari sau nelamuriri in legatura cu acesti termeni de utilizare, nu ezitati sa ne contactati 
              prin intermediul numarului de telefon <strong>{metaData.gdpr.contactData.contactTel}</strong> sau la adresa de email<strong> {metaData.gdpr.contactData.contactEmail}</strong>.
            </p>

            <BackHomeButton />

          </div>
        </div>
      </main>

    </Layout>
  );
}

export default Terms;