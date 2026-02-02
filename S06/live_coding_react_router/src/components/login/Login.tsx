import { useState } from "react";
import "./login.css";
interface IInitialValue {
  email: string;
  password: string;
}
interface IUserFromLocalStorage extends IInitialValue {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}
export default function Login() {
  const [initialValue, setinitialValue] = useState<IInitialValue>({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // get input value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setinitialValue({
      ...initialValue,
      [name]: value,
    });
    setMessage("");
  };
  // Submit
  const handleSubmit = (
    e: React.SubmitEvent<HTMLInputElement | HTMLFormElement>,
  ) => {
    e.preventDefault();

    const userFromLocalstorage = localStorage.getItem("user");
    if (userFromLocalstorage !== null) {
      const user = JSON.parse(userFromLocalstorage) as IUserFromLocalStorage;
      const { email, password } = user;
      if (email === initialValue.email && password === initialValue.password) {
        setMessage(`welcom ${user.firstName} ${user.lastName}`);
        setinitialValue({
          email: "",
          password: "",
        });
      } else {
        setMessage("Your credentials is incorrect");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={initialValue.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={initialValue.password}
        onChange={handleChange}
      />
      <span>{message}</span>
      <button type="submit">login</button>
    </form>
  );
}
