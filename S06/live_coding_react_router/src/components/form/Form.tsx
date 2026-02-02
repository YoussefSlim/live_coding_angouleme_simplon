import { useState } from "react";
import "./form.css";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export default function Form() {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("formData :>> ", formData);
  };
  const handleSubmit = (
    e: React.SubmitEvent<HTMLFormElement | HTMLInputElement>,
  ) => {
    e.preventDefault();
    //  const obj = {
    // firstName: "toto",
    // lastName: "titi",
    // email: "toto@yahoo.fr",
    // password: "1234576839824",
    //}
    // const firstName = obj.firstName // toto
    // const {firstName} = obj // firstName = toto
    // const firstName = obj["firstName"] // toto
    // const firstName = e.target.firstName.value
    // const newObj = {
    //   [name]: value,
    // };
    // console.log("newObj :>> ", newObj); // undefinded car on le stocke pas dans un state
    // [name] = value on reccupere dynamiquement la valeur de name
    // name = "firstName"=> [name] = ["fistName"]
    // puisque {name, value} = e.target => donc on va pouvoir reccupere tout les valeur de mon formulaire
    // mettre à jour le state
    console.log("formData :>> ", formData);

    // apres l'action de l'utilisateur
    // on renitialise le state
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        type="password"
        id="confirm-password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
      {/* <input type="button" value="Submit" /> */}
    </form>
  );
}
