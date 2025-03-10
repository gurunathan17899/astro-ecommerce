import { useState } from "react";
import data from "../../../public/data.json";
import CardProduct from "../products/cardProduct";

interface Props {
  title: string;
  category: any;
}

export default function ProductOverview({ title,category }: Props) {
  const [category_data, set_Category_data] = useState(category);

  const add_to_cart = ()=>{
    console.log('ssdsd')
  }

  return (
    <div className="card card-product card-plain">
      {/* Filter Section - Row-wise Display */}
      <div
        className="d-flex flex-wrap align-items-center mb-4"
        style={{ display: "flex", alignItems: "center", marginLeft: '100px' }}
      >
        {category?.data.map((item: any, index: number) => (
          <div
            key={index}
            className="form-check form-check-inline d-flex me-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6px",
              whiteSpace: "nowrap",
              minWidth: "150px", // Ensures enough space for text
            }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id={`customCheck${index}`}
            />
            <label
              className="form-check-label"
              htmlFor={`customCheck${index}`}
              style={{ marginBottom: 0 }}
            >
              {item.groupname}
            </label>
          </div>
        ))}
      </div>

      {/* Product Grid Section */}

  {category?.data.map((item: any, index: number) => (        
      <div className="row" style={{paddingLeft:'50px',paddingRight:'50px'}}>
        {title.length !== 0 && <h2 className="mb-4">{item.groupname}</h2>}
        {item?.Item.map((product: any) => (
          <div key={product.title} className="col-12 col-md-6 col-lg-2 mb-4">
            <CardProduct
              thumb_src={product?.imageurl}
              thumb_alt={product.imageurl}              
              categories={product.rate}
              title={product.itemname}
              description={product.description}
              price={product.price}
              position="center"
              onPress={()=>add_to_cart()}
            />
          </div>
        ))}
      </div>
  ))}    
    </div>
  );
}
