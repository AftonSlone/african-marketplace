import React, { useState } from "react";
import * as yup from "yup";
import schema from "./validation/signupSchema";

export default function Signup() {
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

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  return (
    <div>
      <h2>Sign up</h2>
      <h3>Create a African Marketplace account</h3>
      <div>
        <form onSubmit={onSubmit}>
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
            <input
              value={formValues.firstName}
              onChange={onChange}
              name="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              value={formValues.lastName}
              onChange={onChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              value={formValues.email}
              onChange={onChange}
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              value={formValues.city}
              onChange={onChange}
              name="city"
              type="text"
              placeholder="City"
            />
          </div>
          <div>
            <input
              value={formValues.country}
              onChange={onChange}
              name="country"
              type="text"
              placeholder="Country"
            />
          </div>

          <div>
            <select
              onChange={onChange}
              value={formValues.preferredCurrency}
              name="preferredCurrency"
            >
              <option value="">- Select Preferred Currency -</option>
              <option value="KES">- KES -</option>
              <option value="RWF">- RWF -</option>
              <option value="UGX">- UGX -</option>
            </select>
          </div>
          <div>
            <select
              onChange={onChange}
              value={formValues.primaryLanguage}
              name="primaryLanguage"
            >
              <option value="">- Select Primary Language -</option>
              <option value="english">- English -</option>
              <option value="kinyarwanda">- Kinyarwanda -</option>
              <option value="swahili">- Swahili -</option>
              <option value="luganda">- Luganda -</option>
              <option value="lukiga">- Lukiga -</option>
            </select>
            <div>
              <button disabled={disabled}>Submit</button>
              <div>
                {formErrors.userName}
                {formErrors.password}
                {formErrors.firstName}
                {formErrors.lastName}
                {formErrors.email}
                {formErrors.city}
                {formErrors.country}
                {formErrors.preferredCurrency}
                {formErrors.primaryLanguage}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
