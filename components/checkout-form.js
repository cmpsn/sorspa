// @ts-check
import { useEffect } from 'react';
import { Formik, useFormikContext } from 'formik';
import * as yup from 'yup';
import ImageNextJS from './image-next';

// FB PIXEL
import * as fbq from '../lib/fbpixel';
import * as ttk from '../lib/ttqpixel';

// Utility functions
import {
  omitObjProperties,
  extractAttrsAsCustomObj,
  getUserOptions,
  getPreferredVariant,
} from '../lib/utils';


// ===== Handle Redirect user to invalid form field 
const ScrollToInvalidField = () => {
  const { errors, submitCount } = useFormikContext();

  useEffect(() => {
    if (submitCount > 0 && Object.keys(errors).length > 0 ) {
      const invalidFormField = document.getElementsByName(Object.keys(errors)[0])[0];
      invalidFormField.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [errors, submitCount]);

  return null;
}

// ===== Confirmation or rejection after sending user data ====
const ThankYou = () => {
  const { status } = useFormikContext();

  // Handle the scroll to THANKYOU Message
  useEffect(() => {
    if (status === 'submitted') {
      const anchorSuccess = document.querySelector('#thankYouMessage');
      anchorSuccess.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    else if (status === 'failedSubmission') {
      const anchorFailure = document.querySelector('#failedSubmission');
      anchorFailure.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
  }, [status]);

  return (
    <>
      {status === 'submitted' && (
        <div 
          id="thankYouMessage" 
          className="px-2 pb-2 bg-success text-center text-white"
        >
          <div className="h4">&nbsp;</div>

          <div className="h4">
            Comanda dvs. a fost trimisă cu SUCCES.
          </div>

          <div>&nbsp;</div>
          <div>
            Vă mulțumim că ați comandat produsul nostru!
          </div>
          <div>
            Produsul va fi trimis prin Curierat Rapid (Sameday Courier).
          </div>
          <div>&nbsp;</div>
          <div>
            În cel mai scut timp vă vom suna pentru confirmarea și procesarea comenzii.
            Coletul ar trebui să ajungă la dvs. în maxim 2 zile lucrătoare 
            după confirmarea și finalizarea comenzii.
          </div>
          <div>
            Vă dorim o zi minunată.
          </div>
        </div>

      )}

      {status === 'failedSubmission' && (
        <div 
          id="failedSubmission" 
          className="px-2 pb-2 bg-danger text-center text-white"
        >
          <div className="h4">&nbsp;</div>

          <div className="h4">
            Trimiterea comenzii a eșuat.
          </div>

          <div>&nbsp;</div>
          <div>
            Din motive tehnice, comanda nu a putut fi trimisă. 
            Vă rugăm să verificați conexiunea la internet, să reîncercați 
            peste câteva minute sau să ne contactați la numărul de telefon afișat pe site.
          </div>
        </div>
      )}
    </>
  );
}


// ===== PAYMENT Component ======
const Payment = ({ 
  productMeasureUnit,
  productCustomPackaged,
  productIsVariable, 
  productAttributes, 
  productVariants }) => {

  // Get the current values from FormikContext hook (a React.Context hook with formik states)
  const { values, setFieldValue } = useFormikContext();

  // Product is repacked in fixed quantities
  

  // Handle QUANTITY change with specific buttons.
  const qtyIncrement = () => {
    setFieldValue('cantitate', values.cantitate + 1, false);
  };
  const qtyDecrement = () => {
    setFieldValue('cantitate', values.cantitate - 1, false);
  };
  
  // Handle PRICE & TRANSPORT COSTS depending on user Options.
  useEffect(() => {
    if (productIsVariable) {
      
      const userOptions = getUserOptions(productAttributes, values);

      const preferredVariant = getPreferredVariant(productVariants, userOptions);

      // Set sku, price, shipping cost
      if (preferredVariant) {
        setFieldValue('sku', preferredVariant.sku, false);
        setFieldValue('pret', preferredVariant.pret, false);
        setFieldValue('cost_transport', preferredVariant.costTransport, false);
        setFieldValue('imageSmallProduct', preferredVariant.imageSmall, false);

        if (productCustomPackaged) {
          setFieldValue('cantitate', preferredVariant.pachetCustomBucati, false);
        }
      }
    }
  }, [
    values, 
    setFieldValue, 
    productCustomPackaged, 
    productIsVariable, 
    productAttributes, 
    productVariants
  ]);

  // Handle SUBTOTAL
  useEffect(() => {
    setFieldValue('subtotal', values.cantitate * values.pret, false);
  }, [values.cantitate, values.pret, setFieldValue]);

  // Handle TOTAL Payment
  useEffect(() => {
    setFieldValue('total', values.subtotal + values.cost_transport, false);
  }, [values.subtotal, values.cost_transport, setFieldValue]);

  // --- Function return ---
  return (
    <>
      {/* ========== CALCULATION block ========== */}
      {/* ========== PRICE block ========== */}
      {productIsVariable && Object.keys(productAttributes).length > 0 && (
        <>
          <hr className="my-2" />
          
          <div className="row align-items-center">

            <div className="col-6 text-start fw-bold">
              {`Preț ${productMeasureUnit}`}
            </div>

            {values.pret > 0 ? (
              <>
                <div className="col-6 text-end fw-bold">
                  {`${values.pret} lei`}
                </div>

                {/* Render the specific image of user's preferred variant */}
                <div className='col-12 text-center mt-4 mb-2'>
                  <ImageNextJS 
                    image={values.imageSmallProduct} 
                    layout="intrinsic"
                    priority={false}
                    sizes={null}
                    imageCSS={null}
                  />
                </div>
              </>

            ) : (
              <div className="col-6 text-end text-danger fw-normal">
                {`Alegeți produsul.`}
              </div>
            )}
          </div>

          <hr className="my-2" />

        </>
      )}

      {/* ========== Quantity block ========== */}
      {productCustomPackaged ? (
        <>
        </>
      ) : (
        <div className="text-center pt-4 mb-2">

          <div className="h5 fw-bold text-uppercase">
            Cantitate
          </div>

          <div className="mb-3 text-secondary">
            <div className="h6">
              *Alegeți cantitatea folosind butoanele &quot;+&quot; sau &quot;-&quot;.
            </div>
          </div>

          <div className="d-flex flex-row align-items-center justify-content-center mb-3 mx-4 mx-md-6">
            <button 
              type="button" 
              disabled={values.cantitate === 1}
              onClick={qtyDecrement}
              className={`btn btn-primary text-white me-2 px-3 quantityButton`}
            >
              {`-`}
            </button>

            <div 
              id="checkout__quantity"
              className="w-50 py-1 fw-bold text-center border border-primary rounded"
            >
              {values.cantitate}
            </div>
            
            <button 
              type="button"
              disabled={values.cantitate === 20}
              onClick={qtyIncrement}
              className={`btn btn-primary text-white ms-2 px-3 quantityButton`}
            >
              {`+`}
            </button>

            <style jsx>{`
              .quantityButton {
                font-size: 1.25rem;
              }
            `}</style>

          </div>
        </div>
      )}

      {/* ========== PAYMENT block ========== */}
      <div className="mt-5 mb-3 text-secondary text-center">
        <div className="h4 text-uppercase border-top border-bottom border-secondary py-1">
          Suma de plată
        </div>
        <div className="h6">
          *Mai jos sunt informațiile privind plata. Vă rugăm să le verificați cu atenție.
        </div>
      </div>

      <div className="row align-items-center my-2 fw-bold">
        <div className="col-6 text-start">
          Subtotal
        </div>

        {values.subtotal > 0 ? (
          <div className="col-6 text-end">
            {`${values.subtotal} lei`}
          </div>
        ) : (
          <div className="col-6 text-end text-danger fw-normal">
            {`Alegeți produsul.`}
          </div>
        )}
      </div>

      <div className="row align-items-center my-2 fw-bold">
        <div className="col-6 text-start">
          Transport
        </div>
        {values.cost_transport > 0 ? (
          <div className="col-6 text-end">
          {`${values.cost_transport} lei`}
          </div>
        ) : (
          <div className="col-6 text-end">
          {`0`}
          </div>
        )}
      </div>

      <hr />

      <div className="row align-items-center my-2 fw-bold">
        <div className="col-6 text-start">
          Total de plată
        </div>

        {values.total > 0 ? (
          <div className="col-6 text-end">
            {`${values.total} lei`}
          </div>
        ) : (
          <div className="col-6 text-end text-danger fw-normal">
            {`Alegeți produsul.`}
          </div>
        )}
      </div>

    </>
  );
}


// ===== FORM Component =====
const CheckoutForm = ({ productIsVariable, productInfo }) => {

  // User Info Fields ('name' and 'placeholder' for html input tags)
  const userInfo = {
    nume: 'Nume și prenume',
    adresa: 'Stradă, nr., bloc, apart.',
    localitate: 'Localitate',
    judet: 'Județ',
    telefon: 'Număr de telefon',
    email: 'E-mail (opțional)',
  }

  // All attributes of the product as array.
  const productAttrbsArray = productIsVariable ? Object.keys(productInfo.atribute) : [];

  // Create Attributes Objects for initialValues and formSchema Objects.
  const attrsForInitialValues = productIsVariable ? 
    extractAttrsAsCustomObj(productInfo.atribute, '') : {};
  
  const attrsForYupSchema = productIsVariable ? 
    extractAttrsAsCustomObj(productInfo.atribute, 
      yup.string().required('Alegeți o variantă.')) : {};

  const initialValues = {
    nume: '',
    adresa: '',
    localitate: '',
    judet: '',
    telefon: '',
    email: '',
    mesaj: '',
    sursa: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    nume_produs: String(productInfo.numeProdus) ?? '',
    imageSmallProduct: {},
    sku: productIsVariable ? '' : String(productInfo.sku),
    pret: productIsVariable ? 0 : +productInfo.pret,
    cantitate: 1,
    subtotal: productIsVariable ? 0 : +productInfo.pret,
    cost_transport: productIsVariable ? 0 : +productInfo.costTransport,
    total: productIsVariable ? 0 : (+productInfo.pret) + (+productInfo.costTransport),
    ...attrsForInitialValues
  };

  const formSchema = yup.object({
    nume: yup.string()
      .min(6, 'Minim 6 litere')
      .max(50, 'Maxim 50 de litere')
      .required('Introdu numele și prenumele.'),
    adresa: yup.string()
      .min(6, 'Minim 6 caractere.')
      .max(50, 'Maxim 50 de caractere')
      .required('Introdu adresa.'),
    localitate: yup.string()
      .min(3, 'Minim 3 litere.')
      .max(50, 'Maxim 50 de litere')
      .required('Introdu localitatea.'),
    judet: yup.string()
      .min(3, 'Minim 3 litere.')
      .max(50, 'Maxim 50 de litere')
      .required('Introdu județul.'),
    telefon: yup.string()
      .min(10, 'Minim 10 cifre.')
      .max(15, 'Maxim 15 de cifre')
      .required('Introdu numărul de telefon.'),
    email: yup.string()
      .email('Adresa de email trebuie să fie validă.')
      .max(100, 'Maxim 100 de caractere'),
    mesaj: yup.string()
      .max(255, 'Maxim 255 de caractere'),
    sursa: yup.string(),
    nume_produs: yup.string(),
    sku: yup.string(),
    pret: yup.number()
      .min(0),
    cantitate: yup.number()
      .positive()
      .integer()
      .min(1, 'Minim 1 bucată.')
      .max(50, 'Maxim 50 de bucăți.')
      .required(),
    subtotal: yup.number()
      .min(0),
    cost_transport: yup.number()
      .min(0),
    total: yup.number()
      .min(0),
    ...attrsForYupSchema
  });

  // ------ Handle FB PIXEL when click on SUBMIT button -----
  const handleFbPixelClick = (/** @type {string} */ currency, /** @type {any} */ total) => {
    fbq.event('Purchase', { currency: currency, value: total })
  }

  // ------ Handle TikTok PIXEL when click on SUBMIT button -----
  const handleTtqPixelClick = (/** @type {string} */ currency, /** @type {any} */ total) => {
    ttk.event('CompletePayment', { 
      content_id: '1',
      content_type: 'product',
      currency: currency, 
      value: total
    })
  }

  // ===== FORM rendering with Formik component ========
  return (
    <Formik
      validationSchema={formSchema} 
      initialValues={initialValues} 
      initialStatus={''}
      validateOnChange={false}
      validateOnBlur={true}

      onSubmit={async (values, { resetForm, setStatus }) => {

        // Get all names of the product attributes inside an array.
        const attrsNames = productIsVariable ? Object.keys(productInfo.atribute) : [];
          
        // Exclude product attributes from user's input before fetch to server/billing platform.
        const filteredValues = omitObjProperties(values, [
          'pret', 
          'subtotal', 
          'cost_transport',
          'imageSmallProduct',
          ...attrsNames
        ]);

        // Filter data for fetching to fba.php file posted on server.
        const valuesForFbApi = omitObjProperties(values, [
          'adresa',
          'email',
          'mesaj',
          'sursa',
          'nume_produs',
          'imageSmallProduct',
          'sku',
          'pret', 
          'cantitate',
          'subtotal', 
          'cost_transport',
          ...attrsNames
        ]);

        // ===== Send form data to server =======
        try {
          const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL, 
            {
              method: 'POST',
              mode: "cors",
              cache: "no-cache",
              // credentials: "same-origin",
              referrerPolicy: 'no-referrer',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SERVER_URL
              },
              body: JSON.stringify(filteredValues),
            }
          );

          if (response.ok) {

            setStatus('submitted');
            handleFbPixelClick('RON', values.total);
            handleTtqPixelClick('RON', values.total);

            try {
              const response = await fetch(process.env.NEXT_PUBLIC_FBAPI_SCRIPT, 
                {
                  method: 'POST',
                  mode: "cors",
                  cache: "no-cache",
                  // credentials: "same-origin",
                  referrerPolicy: 'no-referrer',
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                    // 'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL
                  },
                  body: JSON.stringify(valuesForFbApi),
                }
              );
        
              if (response.ok) {
                // console.log(response);
              } 
              else {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
              }
            }
            catch (error) {
              console.error(`My error message: ${error}`);
            }

          } 
          else {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
          }

          // Server response
          // console.log(response);
        }
        catch (error) {
          setStatus('failedSubmission');
          console.error(`My error message: ${error}`);
        }

        // Form Reset to prevent resending same data after first submit
        //resetForm();

      }}
    >
      {({
        values,
        errors,
        touched,
        status,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          
          {/* ======= User INFO block ========== */}
          <div className="mt-3 text-secondary text-center">
            <div className="h4 text-uppercase border-top border-bottom border-secondary py-1">
              Informații de contact
            </div>
            <div className="h6">
              *Informațiile de mai jos sunt necesare pentru a vă putea trimite
              produsul prin curier.
            </div>
          </div>

          <div id="user__info">
            {Object.keys(userInfo).map((key) => {
              return (
                <div key={key} className="my-3">

                  <div className="form-floating">
                    <input 
                      id={`checkout__${key}`}
                      className="form-control"
                      type="text" 
                      name={key}
                      /* make sure 'values.name' uses the same 'name' as the value of the html 'name' attribute */
                      value={values[key]}
                      placeholder={userInfo[key]}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />

                    <label htmlFor={`checkout__${key}`} className="text-muted">
                      {userInfo[key]}
                    </label>
                  </div>

                  {touched[key] && errors[key] && (
                    <div className={`errorMsg`}>
                      {errors[key]}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="form-floating">
              <textarea 
                id="checkout__Message" 
                className="form-control" 
                name="mesaj"
                value={values.mesaj}
                placeholder="Precizări privind livrarea produsului (dacă e cazul)."
                onBlur={handleBlur}
                onChange={handleChange}
                style={{"height": "100px"}}
              />

              <label htmlFor="checkout__Message" className="text-muted">
                Alte precizări (dacă e cazul)
              </label>
            </div>

            {touched.mesaj && errors.mesaj && (
              <div className={`errorMsg`}>
                {errors.mesaj}
              </div>
            )}
          </div>

          {/* ======= Product ATTRIBUTES block ========== */}
          {productAttrbsArray.length > 0 && (
            <div className="mt-5">
              <div className="mb-2 text-secondary text-center">
                <div className="h4 text-uppercase border-top border-bottom border-secondary py-1">
                  Preferințe
                </div>
                <div className="h6 pb-md-2">
                  *Alegeți caracteristicile produsului dorit.
                </div>
              </div>

              <div className="row mx-3">
                {productAttrbsArray.map((attrib) => {
                  return (
                    <fieldset key={attrib} className="col-md-6">

                      <legend className="h5 my-3 fw-bold text-center text-uppercase text-start">
                        {`${attrib}`}
                      </legend>
                        
                      {productInfo.atribute[attrib].map((opt) => {
                        return (
                          <div 
                            key={opt} 
                            className="form-check my-3 ms-2"
                          >
                            <input
                              type="radio"
                              className="form-check-input"
                              // className="fw-bold text-start border border-primary border-2 rounded-pill my-2 py-2"
                              /* make sure the 'name' attribute is the same as in the 'formik schema' */
                              name={attrib}
                              id={opt}
                              value={opt}
                              onBlur={handleBlur} 
                              onChange={handleChange}
                            />

                            <label 
                              htmlFor={opt}
                              className="form-check-label fw-bold"
                            >
                              {opt}
                            </label>
                          </div>
                        );
                      })}

                      {errors[`${attrib}`] && (
                        <div className={`errorMsg`}>
                          {errors[`${attrib}`]}
                        </div>
                      )}
                    </fieldset>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========= PAYMENT block ============= */}
          <Payment 
            productIsVariable={productIsVariable} 
            productAttributes={productInfo.atribute ?? null}
            productVariants={productInfo.variante ?? null} 
            productMeasureUnit={productInfo.unitateMasura ?? null}
            productCustomPackaged={productInfo.pacheteCustom ?? null}
          />

          {/* ========== SUBMIT block ========== */}

          <div className="text-center mb-4">
            <button 
              id='submitButton'
              type="submit"
              disabled={isSubmitting || status === 'submitted'}
              className="btn btn-wine btn-lg text-white my-3"
              //onClick={handleTtqPixelClick}
            >
              Trimite comanda
            </button>

            {isSubmitting && (
              <div>
                <div 
                  className="spinner-border text-primary me-2" 
                  role="status" 
                  aria-hidden="true"
                ></div>
                <span>&nbsp;</span>

                <span className="text-muted">
                  Comanda se procesează...
                </span>
              </div>
            )}
          </div>

          {/* ========== THANK YOU block ========== */}
          <ScrollToInvalidField />

          <ThankYou />

          {/* ========== CSS in JSX ========== */}
          {/* <style jsx>{`
            .errorMsg {
              color: #FF0000;
              padding: .2rem .5rem;
              font-size: .8em;
              text-align: left;
            }
            .quantityButton {
              font-size: 1.25rem;
            }
          `}</style> */}

        </form>
      )}
    </Formik>
  );
}

export default CheckoutForm;