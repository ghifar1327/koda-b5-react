import React from "react";
import TableBodyList from "./tableBodyList";

export default function TableProduct(props) {
    const {datas} =props
  return (
    <>
      <thead>
        <tr className="border">
          <th className="border">Nama Barang</th>
          <th className="border">Qty</th>
          <th className="border">Price</th>
          <th className="border">Status</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((item , idx)=>{
            return <TableBodyList key={idx} name={item.name} qty={item.qty} price={item.price} status={item.status}/>
        })}
      </tbody>
    </>
  );
}
