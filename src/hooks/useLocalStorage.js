/**
 * ambil data yang lama kalu ada di local storage
 * jika sudah ada data baru , maka save di local storage
 */

import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(() => {
    const old = localStorage.getItem(key);
    if (!old) {
      if (typeof initialState === "function") return initialState();
      return initialState;
    }
    return JSON.parse(old);
  });
  useEffect(() => {
    const newData = JSON.stringify(value);
    localStorage.setItem(key, newData);
  }, [value, key]);
  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(initialState);
  };
  return [value, setValue, removeValue];
    // return { value, setValue, removeValue };
}

// localStorage yang bersikan info login 
// localStorage yng menyimpan data string | boolean
// localStorage yang menyimpan => []