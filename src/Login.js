import React, { useState } from "react";
import * as yup from "yup";
import schema from "./validation/loginSchema";

export default function Login() {
  const initialFormValues = {
    city: "",
    country: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    preferredCurrency: "",
    primaryLanguage: "",
    userName: "",
  };

  const initialFormErrors = {
    city: "",
    country: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    preferredCurrency: "",
    primaryLanguage: "",
    userName: "",
  };

  const initialDisabled = true;

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onSubmit = () => {};

  const onChange = (e) => {
    const { name, value } = e.target;

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <h2>Sign in</h2>
      </div>
      <div>
        <h3>using your African Marketplace account</h3>
      </div>
      <div>
        <input
          value={formValues.userName}
          onChange={onChange}
          name="userName"
          type="text"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          value={formValues.password}
          onChange={onChange}
          name="password"
          type="text"
          placeholder="Password"
        />
      </div>

      <div>
        <button disabled={disabled}>Submit</button>
        <div>
          {formErrors.userName}
          {formErrors.password}
        </div>
      </div>
    </div>
  );
}
