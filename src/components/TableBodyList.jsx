import React from "react";

export default function TableBodyList({name, qty, price, status}) {
  return (
    <>
        <tr>
          <td className="border">{name}</td>
          <td className="border">{qty}</td>
          <td className="border">{price}</td>
          <td className="border">{status}</td>
        </tr>
    </>
  );
}
