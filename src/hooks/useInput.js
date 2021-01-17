import { useState } from "react";

const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onHandleChange = (e) => setValue(e.target.value);

  return [value, onHandleChange];
};

export default useInput;
