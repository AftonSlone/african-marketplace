import * as yup from "yup";
export default yup.object().shape({
  userName: yup
    .string()
    .required("Username Required")
    .min(4, "Username must be at least 3 characters")
    .max(10, "Username can not be more than 10 characters"),
  password: yup
    .string()
    .required("Password Required")
    .min(8, "Password must be at least 3 characters")
    .max(12, "Password can not be more than 12 characters"),
});
