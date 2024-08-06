import React from "react";

const useCommonService = () => {
  const handleClickMenu = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  return { handleClickMenu };
};

export default useCommonService;
