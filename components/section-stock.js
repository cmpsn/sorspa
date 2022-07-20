const SectionStock = ({ totalStock, availableStock }) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">

        <div className="card fw-bold text-center">

          <div className="card-header">
            {`STOC LIMITAT!`} 
          </div>

          <div className="card-body">
            <p className="card-text">
              <span>
                {`Doar `}
              </span>
              <span className="text-danger">
                {`${availableStock} `}
                {/* {`${Math.floor(Math.random() * (max - min) + min)} `} */}
              </span>
              <span>
                {`bucăți rămase din stoc inițial de `}
              </span>
              <span className="text-danger">
                {`${totalStock}`}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionStock;