import OrderForm from "@/components/order/order-form/order-form";
import React from "react";

function Page() {
  return (
    <div className="flex flex-row justify-center">
      <div className="w-full mx-20 mt-20">
        <OrderForm></OrderForm>
      </div>
    </div>
  );
}

export default Page;
