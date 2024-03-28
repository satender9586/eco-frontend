import axiosconfig from "../../confitg/axiosconfig.js";

export const getAllProductApi = async () => {
  const response = axiosconfig.post("/product/products");
  if (!(await response).statusText === "ok") {
    throw new Error("Soome Thing Went Wrong");
  }
  return response;
};

export const getSingleProductApi = async (id) => {
  const response = axiosconfig.get(`/product/singleproduct/${id}`);
  if (!(await response).statusText === "ok") {
    throw new Error("Soome Thing Went Wrong");
  }
  return response;
};

export const getuserInfoData = async (id) => {
  const response = axiosconfig.get(`/auth/userInfo/${id}`);
  if (!(await response).statusText === "ok") {
    throw new Error("Soome Thing Went Wrong");
  }
  return response;
};
export const getAllOrdersApi = async (id) => {
  const response = axiosconfig.get(`/payment/ordersuser/${id}`);
  if (!(await response).statusText === "ok") {
    throw new Error("Soome Thing Went Wrong");
  }
  return response;
};
