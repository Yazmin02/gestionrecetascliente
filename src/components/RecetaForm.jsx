import { useState } from 'react';

const RecetaForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ nombre: '', descripcion: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);  // Verifica si los datos son correctos
    onSubmit(formData);
  };
  

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded-3 bg-light">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label text-primary">Nombre</label>
        <input
          type="text"
          className="form-control border-primary"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcion" className="form-label text-primary">Descripción</label>
        <textarea
          className="form-control border-primary"
          id="descripcion"
          name="descripcion"
          rows="4"
          value={formData.descripcion}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg w-100">Guardar</button>
    </form>
  );
};

export default RecetaForm;
