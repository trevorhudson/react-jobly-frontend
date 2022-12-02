import { useState, useEffect } from "react";

// /** Hook for setting/getting items from Local Storage
//  *
//  *
// */

function useLocalStorage(key, init = null) {

  const initialValue = localStorage.getItem(key) || init;

  const [item, setItem] = useState(initialValue);

  /** set key */
  useEffect(function setKeyInLocalStorage() {

    // if null -> remove item

    if (item === null) {
      localStorage.removeItem(key);
    }

    else {
      localStorage.setItem(key, item);
    }


  }, [key, item]);



  return [item, setItem];


}


export default useLocalStorage;



