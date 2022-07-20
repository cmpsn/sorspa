const ScrollToButton = ({ referrerId }) => {
  return (
    <button
      type="button"
      className="btn btn-wine btn-lg text-white fs-3"
      // onClick={() => document.querySelector(`#${elementId}`).scrollIntoView({ behavior: 'smooth', block: 'start' })}
      onClick={() => document.getElementById(referrerId).scrollIntoView({ behavior: 'smooth', block: 'start' })}
    >
      Cumpără acum
    </button>
  );
}

export default ScrollToButton;