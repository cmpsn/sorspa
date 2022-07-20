import Link from 'next/link';

const BackHomeButton = () => {
  return (
    <div className="text-center mx-1 pt-3">
      <Link href="/">
        <a className="fs-4 text-decoration-none">
          &lt;&lt; Înapoi la pagina principală
        </a>
      </Link>
    </div>
  );
}

export default BackHomeButton;