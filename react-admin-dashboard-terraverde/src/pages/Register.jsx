import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    role: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos a la API
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Ubicación"
        onChange={handleChange}
      />
      <select name="role" onChange={handleChange}>
        <option value="">Selecciona un rol</option>
        <option value="producer">Productor</option>
        <option value="buyer">Comprador</option>
        <option value="distributor">Distribuidor</option>
      </select>
      <input
        type="text"
        name="contact"
        placeholder="Contacto"
        onChange={handleChange}
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;
