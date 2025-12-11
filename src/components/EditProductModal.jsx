import React from "react";
import { useDispatch } from "react-redux";
import { editProductThunk } from "../redux/slices/product";

export default function EditProductModal({ product, close }) {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const updated = {
      name: e.target["name-product"].value,
      qty: Number(e.target["quantity"].value),
      price: Number(e.target["price"].value),
      status: e.target["status"].value,
    };

    dispatch(
      editProductThunk({
        id: product.id,
        updatedProduct: updated,
      })
    );

    close();
  }

  return (
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-md shadow-lg w-[350px]">
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3">

          {/* NAME */}
          <label>
            <p className="font-medium">Nama Product</p>
            <input
              type="text"
              name="name-product"
              defaultValue={product.name}
              className="border border-gray-400 w-full p-1 rounded"
            />
          </label>

          {/* QUANTITY */}
          <label>
            <p className="font-medium">Quantity</p>
            <input
              type="number"
              name="quantity"
              defaultValue={product.qty}
              className="border border-gray-400 w-full p-1 rounded"
            />
          </label>

          {/* PRICE */}
          <label>
            <p className="font-medium">Price</p>
            <input
              type="number"
              name="price"
              defaultValue={product.price}
              className="border border-gray-400 w-full p-1 rounded"
            />
          </label>

          {/* STATUS */}
          <label>
            <p className="font-medium">Status</p>
            <select
              name="status"
              defaultValue={product.status}
              className="border border-gray-400 w-full p-1 rounded">
              <option value="avaliable">Avaliable</option>
              <option value="not-avaliable">Not Avaliable</option>
            </select>
          </label>

          {/* BUTTON ACTION */}
          <div className="flex flex-col gap-2 mt-3">
            <button type="submit"className="bg-blue-600 text-white p-2 rounded-md">Save</button>
            <button type="button" onClick={close} className="bg-gray-400 text-white p-2 rounded-md">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
