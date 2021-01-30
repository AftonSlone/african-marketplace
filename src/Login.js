import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "./validation/loginSchema";
import axios from "axios";

export default function Login() {
  const initialFormValues = {
    password: "",
    username: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://african-marketplace-tt7.herokuapp.com/login",
        `grant_type=password&username=${formValues.username}&password=${formValues.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
      })
      .catch((err) => {
        debugger;
      });
  };

  // localStorage.setItem("token", res.data.token)

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

  useEffect(() => {
    yup
      .reach(schema)
      .validate(formValues)
      .then((valid) => {
        setDisabled(!valid);
      });
  }, [formValues]);

  return (
    <div>
      <div>
        <h2>Sign in</h2>
      </div>
      <div>
        <h3>Using your African Marketplace account!</h3>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <input
            value={formValues.username}
            onChange={onChange}
            name="username"
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
      </form>
    </div>
  );
}
