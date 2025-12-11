import { useDispatch } from "react-redux";
import { addProductThunk } from "../redux/slices/product";

export default function InputProduct() {
  // const product = useSelector((state) => state.InputProduct.products);
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    const inputValue = {
      name: event.target["name-product"].value,
      qty: event.target["quantity"].value,
      price: event.target["price"].value,
      status: event.target["status"].value,
    };
    dispatch(addProductThunk(inputValue));
    event.target.reset();
  }
  // const newDatas = {};
  // Object.assign(newDatas, { name: event.target["name-product"].value });
  // Object.assign(newDatas, { qty: event.target["quantity"].value });
  // Object.assign(newDatas, { price: event.target["price"].value });
  // Object.assign(newDatas, { status: event.target["status"].value });
  // setDatas((datas) => {
  //   return [...datas, newDatas];
  // });
  // event.target["name-product"].value = "";
  // event.target["quantity"].value = "";
  // event.target["price"].value = "";
  // event.target["status"].value = "";

  return (
    <>
      <div className="flex flex-col items-center">
        <form
          noValidate
          className="border-2 p-5 rounded-md"
          onSubmit={handleSubmit}
        >
          <label htmlFor="product">
            <p>Input nama product</p>
            <input
              type="text"
              name="name-product"
              id="product"
              className="border border-gray-400"
            />
          </label>
          <label htmlFor="qty">
            <p>Quantity</p>
            <input
              type="number"
              name="quantity"
              id="qty"
              className="border border-gray-400"
            />
          </label>
          <label htmlFor="qty">
            <p>price</p>
            <input
              type="number"
              name="price"
              id="price"
              className="border border-gray-400"/>
          </label>
          <label htmlFor="ada">
            <p>Status</p>
            <select
              name="status"
              id=""
              className="w-full border border-gray-400 mb-2"
            >
              <option value="avaliable">Avaliable</option>
              <option value="not-avaliable">Not Avaliable</option>
            </select>
          </label>
          <div>
            <button
              type="submit"
              className="border-gray-400 border bg-blue-500 text-white p-1 border-none rounded-md w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
