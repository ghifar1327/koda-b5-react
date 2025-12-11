import React, { useState } from "react";
import TableBodyList from "./tableBodyList";
import { useSelector } from "react-redux";
import EditProductModal from "./EditProductModal";

export default function TableProduct() {
  // const product = useSelector((state) => state.InputProduct.products);

    const datas = useSelector((state) => state.inputProduct.products);

  const [editData, setEditData] = useState(null);

  function openEdit(id) {
    const product = datas.find((item) => item.id === id);
    setEditData(product);
  }
  return (
    <>

      <thead>
        <tr className="border">
          <th className="border">Nama Barang</th>
          <th className="border">Qty</th>
          <th className="border">Price</th>
          <th className="border">Status</th>
          <th className="border">Edit</th>
          <th className="border">X</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((item) => {
          return (
            <TableBodyList
            key={item.id}
              {...item}
              onEdit={openEdit}
              id={item.id}
              name={item.name}
              qty={item.qty}
              price={item.price}
              status={item.status}
            />
          );
        })}
      </tbody>
      {editData && (
        <EditProductModal product={editData} close={() => setEditData(null)} />
      )}
    </>
  );
}
