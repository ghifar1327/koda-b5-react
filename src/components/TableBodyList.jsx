import React from "react";
import { useDispatch } from "react-redux";
import {deleteProductThunk } from "../redux/slices/product";

export default function TableBodyList({id, name, qty, price, status, onEdit}) {
  const dispatch = useDispatch()
  
  return (
    <>
        <tr>
          <td className="border">{name}</td>
          <td className="border">{qty}</td>
          <td className="border">{price}</td>
          <td className="border">{status}</td>
          
          <td className="border"><button
          className=" text-yellow px-3 py-1 rounded"
          onClick={() => onEdit(id)}
        >
          Edit
        </button></td>
          <td className="border"><button className=" text-red-500" onClick={()=>dispatch(deleteProductThunk(id))}>delete</button></td>
        </tr>
    </>
  );
}
