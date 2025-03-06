import { notFound, redirect } from "next/navigation";

export default async function ProductReview({ params }) {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products");
  }

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
