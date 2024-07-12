import React, { useState } from 'react';
import './crearEmprendimiento.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

const CrearEmprendimiento = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className='create-bussiness-container'>
      <Nav />
      <h2>Crear Emprendimiento</h2>
      <div className="form-container">
        <form action="">
          <div className="first-part">
            <div className='left'>
              <label htmlFor="name">
                Nombre del emprendimiento
                <input placeholder='Ingresa el nombre del emprendimiento' type="text" name="name" id="name" />
              </label>
              <label htmlFor="description">
                Descripción
                <textarea placeholder='Ingresa la descripción del emprendimiento' name="description" id="description" cols="30" rows="10" />
              </label>
            </div>
            <div className='right'>
              <label htmlFor="image">
                Upload the banner Img
                <div className="img">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" />
                ) : (
                  <p>Upload Img</p>
                )}
              </div>
              </label>
              <input  type="file" name="image" id="image" onChange={handleImageUpload} />
              
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default CrearEmprendimiento;
