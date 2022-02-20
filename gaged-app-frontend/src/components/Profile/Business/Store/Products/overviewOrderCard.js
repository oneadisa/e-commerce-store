import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="flex space-y-5 lg:space-y-0 lg:flex-row justify-between mt-5 pb-2 px-2 hover:bg-light-blue">
      <tr className="whitespace-nowrap">
        <td className="px-2 md:px-6 py-2 md:py-4 text-sm">
          {order.productTitle}
        </td>
        <td className="px-2 md:px-6 py-2 md:py-4 text-sm">
          {order.phoneNumber}
        </td>
        <td className="px-2 md:px-6 py-2 md:py-4 text-sm">
          {order.totalPrice}
        </td>
        <td className="px-2 md:px-6 py-2 md:py-4 text-sm">
          $ {order.orderStatus}
        </td>
      </tr>
    </div>
  );
};

export default OrderCard;
