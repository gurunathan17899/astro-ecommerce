import data from "../../../public/data.json";
import CardProduct from "../products/cardProduct";

interface Props {
  title: string;
}

export default function ProductOverview({ title }: Props) {
  return (
    <div className="card card-product card-plain">
      {title.length !== 0 && <h2 className="mb-4">{title}</h2>}

      {/* Filter Section - Row-wise Display */}
      <div className="d-flex flex-wrap align-items-center mb-4" style={{marginLeft: "20px"}}>
  <strong className="me-3">Categories:</strong>
  {["Almond", "Berry", "Cashew", "Nuts", "Others"].map((category, index) => (
    <div
      key={index}
      className="form-check form-check-inline d-flex align-items-center me-3"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        whiteSpace: "nowrap",
        minWidth: "80px", // Ensures enough space for text        
      }}
    >
      <input className="form-check-input" type="checkbox" id={`customCheck${index}`} />
      <label
        className="form-check-label"
        htmlFor={`customCheck${index}`}
        style={{ marginBottom: 0 }}
      >
        {category}
      </label>
    </div>
  ))}
</div>



      {/* Product Grid Section */}
      <div className="row" style={{}}>
        {data.products.map((product) => (
          <div key={product.title} className="col-12 col-md-6 col-lg-4 mb-4">
            <CardProduct
              thumb_src={product.thumb_src}
              thumb_alt={product.thumb_alt}
              color={product.color}
              colors={product.colors}
              title={product.title}
              description={product.description}
              price={product.price}
              position="center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
