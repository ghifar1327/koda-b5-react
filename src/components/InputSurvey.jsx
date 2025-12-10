import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSurvey, deleteSurvey } from "../redux/slices/formmSurvey";
import Header from "./Header";

export default function InputSurvey() {
  const datas = useSelector((state) => state.survey.datas);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      age: e.target.age.value,
      gender: e.target.gender.value,
      smoker: e.target.smoker.value,
      brand: {
        marlboro: e.target.marlboro.checked ? e.target.marlboro.value : "",
        esse: e.target.esse.checked ? e.target.esse.value : "",
        sampurna: e.target.sampurna.checked ? e.target.sampurna.value : "",
        la: e.target.la.checked ? e.target.la.value : "",
      },
    };

    dispatch(addSurvey(formData));
    e.target.reset();
  }

  console.log(datas);

  return (
    <>
    <Header/>
      <div className="flex flex-row-reverse justify-center h-screen items-center gap-10">

        <div className="flex flex-col border w-56 p-2">
        <h1 className="text-center">Survey Perokok</h1>
          <form onSubmit={handleSubmit}>
            {/* NAMA */}
            <div>
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 rounded-sm w-full"
                required
              />
            </div>

            {/* UMUR */}
            <div className="mt-2">
              <label htmlFor="age">Umur</label>
              <input
                type="number"
                min={18}
                name="age"
                id="age"
                className="border-2 rounded-sm w-full"
                required
              />
            </div>
            {/* GENDER */}
            <div className="mt-2">
              <p>Jenis Kelamin</p>

              <div>
                <input
                  type="radio"
                  name="gender"
                  id="men"
                  value="Laki-laki"
                  required
                />
                <label htmlFor="men">Laki-laki</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="woman"
                  value="Perempuan"
                />
                <label htmlFor="woman">Perempuan</label>
              </div>
            </div>

            {/* SMOKER */}
            <div className="mt-2">
              <p>Apakah Anda Perokok?</p>
              <div>
                <input
                  type="radio"
                  name="smoker"
                  id="yes"
                  value="Ya"
                  required
                />
                <label htmlFor="yes">Ya</label>
              </div>
              <div>
                <input type="radio" name="smoker" id="no" value="Tidak" />
                <label htmlFor="no">Tidak</label>
              </div>
            </div>

            {/* BRAND */}
            <div className="mt-2">
              <p>Brand Rokok Yang Digunakan?</p>
              <div>
                <input type="checkbox" name="marlboro" id="marlboro" value="Marlboro"/>
                <label htmlFor="marlboro">Marlboro</label>
              </div>
              <div>
                <input type="checkbox" name="esse" id="esse" value="Esse"/>
                <label htmlFor="esse">Esse</label>
              </div>
              <div>
                <input type="checkbox" name="sampurna" id="sampurna" value="Sampurna"/>
                <label htmlFor="sampurna">Sampurna</label>
              </div>
              <div>
                <input type="checkbox" name="la" id="la" value="L.A"/>
                <label htmlFor="la">L.A</label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-3 border p-1 rounded bg-blue-500 text-white w-full"
            >
              Submit
            </button>
          </form>
        </div>
          <div className="mt-5 w-full max-w-2xl">
          <table className="w-full border text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-1">No</th>
                <th className="border p-1">Nama</th>
                <th className="border p-1">Umur</th>
                <th className="border p-1">Gender</th>
                <th className="border p-1">Perokok</th>
                <th className="border p-1">Brand</th>
                <th className="border p-1">X</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {datas.map((item, index) => (
                <tr key={index}>
                  <td className="border p-1 text-center">{index + 1}</td>
                  <td className="border p-1">{item.name}</td>
                  <td className="border p-1">{item.age}</td>
                  <td className="border p-1">{item.gender}</td>
                  <td className="border p-1">{item.smoker}</td>
                  <td className="border p-1">
                    {Object.values(item.brand)
                      .filter((b) => b !== "")
                      .join(", ")}
                  </td>
                  <td className="border p-1"><button className="text-red-500 font-bold" onClick={()=>{dispatch(deleteSurvey(item.id))}}>delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
