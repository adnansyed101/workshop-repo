import { notFound, redirect } from "next/navigation";

function getRandomInt(count) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({ params }) {
  const { productId, reviewId } = await params;
  const random = getRandomInt(2);

  if (random === 1) {
    throw Error("Error Loading Review");
  }

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
