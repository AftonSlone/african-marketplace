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
  firstName: yup.string().required("First Name Required"),
  lastName: yup.string().required("Last Name Required"),
  email: yup.string().email().required("Valid Email Required"),
  city: yup.string().required("City Required"),
  country: yup.string().required("Country Required"),
  role: yup
    .string()
    .oneOf(["KES", "RWF", "UGX"], "Please select preferred currency"),
  role: yup
    .string()
    .oneOf(
      ["english", "kinyarwanda", "swahili", "luganda", "lukiga"],
      "Please select primary language "
    ),
});
