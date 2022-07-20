import Link from 'next/link';

const Footer = ({ footerData }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-4">

      <div className="container">
        <div className="row justify-content-center lh-lg">
          
          <div className="col-md-6">
            <ul className="no-bullets">
              <li>
                <Link href="/contact">
                  <a>
                    {footerData.gdpr.aboutTag}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/returnare">
                  <a>
                    {footerData.gdpr.refundTag}
                  </a>
                </Link>
              </li>
              <li>
                <a href={footerData.gdpr.anpc.url} rel="noopener noreferrer nofollow" target="_blank">
                  {footerData.gdpr.anpc.name}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-auto">
            <ul className="no-bullets">
              <li>
                <Link href="/termeni">
                  <a>
                    {footerData.gdpr.termsTag}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/confidentialitate">
                  <a>
                    {footerData.gdpr.privacyTag}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" scroll={false}>
                  <a>
                    {footerData.gdpr.cookiesTag}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row text-md-center lh-lg">
          <div className="col-md-12">
            <ul className="no-bullets">
              <li>
                <span>&copy;&nbsp;{currentYear}{' '}</span>
                <Link href="/">
                  <a>
                    {footerData.siteName}
                  </a>
                </Link>
              </li>
              <li>
                Creat de{' '}
                <a href={footerData.domain.url} rel="noopener noreferrer" target="_blank">
                  <span>
                    {footerData.domain.name}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <style jsx>{`
          a {
            color: #f8f9fa;
            font-weight: 400;
            text-decoration: none;
          }
          a:hover {
            color: #00fbff;
          }
        `}</style>
        
      </div>
      
    </footer>
  )
}

export default Footer