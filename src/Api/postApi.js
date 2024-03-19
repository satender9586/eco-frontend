import instance from "../../confitg/axiosconfig";





export const SignupApi = async (Data) => {
    const response = await instance.post(`auth/register`, Data);
    if (!response.statusText == "ok") {
        throw new Error("Something Went Wrong")
    }
    return response;
}


export const OtpverifyApi = async (Data) => {
    const response = await instance.post(`/auth/otp-verify`, Data)
    if (!response) {
        throw new Error("Some Thing gone otpverify api")
    }
    return response;
}

export const ResendotpApi = async (data) => {
    const response = await instance.post(`/${data.path}`, data.datas)
    if (!response) {
        throw new Error("Some Thing gone otpverify api")
    }
    return response;
}


export const LoginApi = async (data) => {
    const response = await instance.post("/auth/login", data)
    if (!response) {
        throw new Error("Some Thing gone otpverify api")
    }
    return response;
}

export const CreateOrderApi = async (data) => {
    const response = await instance.post("/order/createOrder", data)
    if (!response) {
        throw new Error("Some Thing gone otpverify api")
    }
    return response;
}


export const ShippingApi = async (data) => {
    const response = await instance.post("/shipping/shipping", data)
    if (!response) {
        throw new Error("Some Thing gone otpverify api")
    }
    return response;
}

export const TokenVerifyApi = async () => {
    const response = await instance.post("/auth/tokenverify")
    if (!response) {
        throw new Error("Some Thing gone otpverify api")
    }
    return response;
}



export const PaymentInitApi = async (data) => {
    const response = await instance.post("/payment/makePayment",data)
    if (!response) {
        throw new Error("Some Thing gone otpverify api")
    }
    return response;
}

export const PaymentConfirm = async (data) => {
    const response = await instance.post("/payment/confirmPayment",data)
    if (!response) {
        throw new Error("Some Thing gone otpverify api")
    }
    return response;
}
