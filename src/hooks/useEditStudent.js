import { useState } from "react";

export function useEditStudent() {
  const [openStudent, setOpenStudent] = useState();
  return {
    openStudent,
    setOpenStudent,
  };
}
