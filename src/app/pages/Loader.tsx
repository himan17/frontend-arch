import React from "react";
import { useNavigate } from "react-router-dom";

const Loader: React.FC<{ isLoading: boolean; isSuccess: boolean }> = ({
  isLoading,
  isSuccess,
}) => {
  const navigate = useNavigate();

  if (!isLoading && !isSuccess) {
    navigate("/auth-failure");
  }

  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-secondary-light"></div>
    </div>
  );
};

export default Loader;
