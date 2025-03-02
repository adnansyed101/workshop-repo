const ProductDetails = async ({ params }) => {
  const productId = (await params).productId;

  return <h1>Details about product {productId}</h1>;
};

export default ProductDetails;
