
const passwordRegex =
/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{8,20}$/;
const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const phoneRegex = /^\d{10}$/;


export const SinginputValidation = (data) => {
  const error = {};
 

  if (!data.name) {
    error.name = "Name is Required";
  }

  if (!data.email) {
    error.email = "Email is Required";
  } else if (!emailRegex.test(data.email)) {
    error.email = "Invalid Email";
  }

  if (!data.password) {
    error.password = "Password is Required";
  } else if (!passwordRegex.test(data.password)) {
    error.password = "Invalid Password";
  }

  

  if (!data.phone) {
    error.phone = "Phone Number is Required";
  } else if (!phoneRegex.test(data.phone)) {
    error.phone = "Invalid Phone Number";
  }

  return error;
};



export const LoginValidation = (data) => {
  const error = {};
   if (!data.email) {
    error.email = "Email is Required";
  } else if (!emailRegex.test(data.email)) {
    error.email = "Invalid Email";
  }

  if (!data.password) {
    error.password = "Password is Required";
  } else if (!passwordRegex.test(data.password)) {
    error.password = "Invalid Password";
  }
  return error;
};


export const isValidAmount = (amount) => { 
  return typeof amount === "number" && amount > 0;
};



export function loadScript() {
  return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
          resolve(true);
      };
      script.onerror = () => {
          resolve(false);
      };
      document.body.appendChild(script);
  });
}