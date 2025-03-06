"use client";
import { useRouter } from "next/navigation";
import React from "react";

function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order.");
    router.push("/");
  };

  return (
    <>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}

export default OrderProduct;
