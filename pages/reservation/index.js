import Input from "../../components/Input";
import Button from "../../components/Button";

import { useState } from "react";

export default function Reservation() {
  const [formValues, setFormValues] = useState({
    brand: "",
    article: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log("voy a capturar los valores");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <h1>hola soy una reserva</h1>
      <form action="post" onSubmit={handleSubmit}>
        <Input
          placeholder="marca"
          name={"brand"}
          type={"text"}
          value={formValues.brand}
          onChange={handleChange}
        />
        <Input
          placeholder="articulo"
          name={"article"}
          type={"text"}
          value={formValues.article}
          onChange={handleChange}
        />
        <Button title="Capturar" />
      </form>
      <label>
        {formValues.brand} {formValues.article}
      </label>
    </>
  );
}
