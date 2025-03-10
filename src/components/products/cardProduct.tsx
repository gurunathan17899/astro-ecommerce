import CartQuickview from './CartQuickView';

interface Category {
  price: number;
  CategoryCode: number;
  CategoryName: string;
}

interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  description: string;
  price: number;
  position: string;
  categories: Category[];
  onPress: any;
}



export default function CardProduct({
  thumb_src,
  thumb_alt,
  title,
  description,
  price,    
  position,
  categories,
  onPress
}: Props) {

  const classList = "card-body " + "text-" + position;
  

  return (
    <>
      <div className="card card-product border mb-5 shadow-xs border-radius-lg">
        <a href="#">
          <div className="height-250">
            <img
              className="w-100 h-70 p-4 rounded-top"
              src={`${thumb_src}`}
              alt={thumb_alt}
            />
          </div>
          <div className={classList}>
            {title && <h4 className="font-weight-bold">{title}</h4>}

            {description && <p className="text-body">{description}</p>}

            {categories && categories.length > 0 && (
              <div
                className="d-flex flex-wrap gap-1"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="badge badge-primary px-4 py-4 d-flex flex-row align-items-center border rounded shadow-sm bg-light text-dark"
                    style={{
                      minWidth: "80px",
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <span
                      className="font-weight-bold"
                      style={{ fontSize: "10px" }}
                    >
                      {category.CategoryName}:
                    </span>
                    <span className="text-muted" style={{ fontSize: "10px" }}>
                      ₹{category.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {price && (
              <h4 className="mb-0 text-lg mt-1 mb-3">
                ${price.toLocaleString()}
              </h4>
            )}

            <div style={{ marginTop: "16px" }}>
              <button
                onClick={onPress}
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
