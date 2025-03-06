import ProductFeatureImg from './productFeatureImg';
import ProductFeatureDetails from './productFeatureDetails';

interface Props {
  title: string;
  images: ({
    src: string;
    alt: string;
  })[];
  full_description: string;
  featuresDetails: Map<string,string>;
}

export default function ProductOverview({
  title,
  images,
  full_description,
  featuresDetails,
}: Props) {
  
console.log(images)
  return (
    <>
    <div className="card card-product card-plain">
      <div className="row">
        <div className="col-12 col-lg-7 mx-auto text-center">
          {(title.length != 0) && 
            <h2 className="mb-3">{title}</h2>
          }
          {(full_description.length != 0) && 
            <p className="mb-5">{full_description}</p>
          }
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-lg-6 pe-5">
          <div className="row">
            <h4 className="mb-3">Product Description</h4>
            <p className="mb-5">`🌰 Premium Quality: Handpicked, farm-fresh nuts with the finest taste and crunch.
        💪 Packed with Nutrition: Rich in protein, fiber, and healthy fats for a power-packed snack.
        🛡️ 100% Natural & Fresh: No additives, no preservatives—just pure goodness in every bite.
        🚀 Fast & Secure Delivery: Freshly packed and delivered straight to your doorstep.
        🎁 Perfect for All Occasions: Ideal for daily snacking, gifting, and festive treats.
        🌿 Sustainable & Ethically Sourced: Supporting farmers and ensuring eco-friendly packaging.`</p>
            <ProductFeatureDetails featuresDetails={featuresDetails} />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <ProductFeatureImg images={images}/>
        </div>
      </div>
    </div>
    </>
  );
};
