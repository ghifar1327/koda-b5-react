import React, { useState } from "react";
import InputProduct from "../components/InputProduct";
import TableProduct from "../components/TableProduct";

export default function DataProduct() {
  const [datas, setDatas] = useState([
    { name: "Roti", qty: 4, price: 10_000, status: "avaliable" },
  ]);
  return (
    <>
      <main>
        <header className="text-center">Form Input Data Product</header>
        <InputProduct setDatas={setDatas} />
        <div className="flex justify-center mt-10">
          <table className="w-100 text-center">
            <TableProduct datas={datas} />
          </table>
        </div>
      </main>
    </>
  );
}
