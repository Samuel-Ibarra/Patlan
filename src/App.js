import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import emailjs from 'emailjs-com';



function App() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        'service_ebswwk7', // Reemplaza con tu Service ID
        'template_98yiiu4', // Reemplaza con tu Template ID
        templateParams,
        'W5DOZwfLYQd-Efl2F' // Reemplaza con tu User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Correo enviado correctamente');
          alert('Correo enviado correctamente'); // Alerta de éxito
        },
        (error) => {
          console.log(error.text);
          setMessage('Error al enviar el correo');
          alert('Error al enviar el correo'); // Alerta de error
        }
      );
  };


  return (
    <div className="container text-center">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo alineado a la izquierda */}
          <a className="navbar-brand" href="#">
            <img
              src={`${process.env.PUBLIC_URL}/Img/PATLAN LOGO.png`}
              alt="Logo Patlán Electrodomésticos"
              className="logo-img"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Enlaces alineados a la derecha */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#inicio">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#nosotros">Acerca de Nosotros</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner-container">
        <img
          src={`${process.env.PUBLIC_URL}/Img/Banner HOME.png`} // Ruta de la imagen
          alt="Banner"
          className="img-fluid"
        />
      </div>

      {/* Acerca de Nosotros */}
      <section id="nosotros" className="my-5">
        <h2>ACERCA DE NOSOTROS</h2>
        <p>
        Patlán Electrodomésticos nace en el año 2009, como una empresa 
        especializada en la venta de refacciones de aparatos electrodomésticos
        y línea blanca al público en general.
        </p>
        <br></br>
        <p>
        Teniendo siempre como objetivo el buen servicio, 15 años nos respaldan, 
        donde nos hemos distinguido por ser la mejor opción para nuestros clientes.
        </p>
      </section>

      {/* Misión y Visión */}
      <section
        className="mission-vision-section my-5">
        <div className="row align-items-center">
          <div className="col-lg-12 mx-auto mb-4">
            <div className="mission-vision-header d-flex align-items-center justify-content-center">
               {/* Ícono de Misión */}
               <img
              src={`${process.env.PUBLIC_URL}/Img/Diana.png`}
              alt="Misión Icono"
              className="mission-img"
              />
              <h2 className="ms-3 mb-0">MISIÓN</h2>
            </div>
            <p className="mt-3">Ser la mejor opción para nuestros clientes brindando productos de calidad, precios competitivos y buen trato.</p>
          </div>
          <div className="col-lg-12 mx-auto">
            <div className="mission-vision-header d-flex align-items-center justify-content-center">
              {/* Ícono de Visión */}
              <img
              src={`${process.env.PUBLIC_URL}/Img/Ojo.png`}
              alt="Misión Icono"
              className="vision-img"
              />
              <h2 className="ms-3 mb-0">VISIÓN</h2>
            </div>
            <p className="mt-3">Comercializar nuestros productos a nivel nacional a través de las herramientas tecnológicas que existen en la actualidad y así poder brindar la atención que se merecen todos nuestros clientes.</p>
          </div>
        </div>
      </section>

       {/* Ubicación y Horarios */}
      <section id="contacto" className="contact-section my-5 p-4">
        <h2>CONTACTO</h2>
        <div className="row align-items-start">
          <div className="col-lg-6 col-md-12">
            <h3 className="text-primary fw-bold text-start">Ubicación:</h3>
            <p className="text-start">Mausoleo 212A Col. Arcos del Sol 3er. Sector, C.P. 64102 Monterrey, N.L.</p>
            
            <h3 className="text-primary fw-bold mt-4 text-start">Horarios de atención:</h3>
            <p className="fw-bold text-start">Lunes a Viernes</p>
            <p className="text-start">9:30 a.m. – 2:00 p.m.<br />3:30 p.m. – 6:00 p.m.</p>
            
            <p className="fw-bold text-start">Sábados</p>
            <p className="text-start">10:00 a.m. – 4:00 p.m.</p>
          </div>

          <div className="col-lg-6 col-md-12">
            {/* Aquí va el mapa de Google Maps */}
            <div style={{ width: '100%' }}>
              <iframe
                title="Google Maps"
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Mausoleo%20212A%20Col.%20Arcos%20del%20Sol%203er.%20Sector%20C.P.%2064102%20Monterrey.%20N.L+(PATL%C3%81N)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
              </iframe>
            </div>
          </div>
        </div>
      </section>

       {/* Footer con Formulario */}
       <footer className="footer-section">
        <div className="row mx-0 align-items-center">
          {/* Información de Contacto */}
          <div className="col-md-6 text-center py-4">
            <p className="text-white">
              <i className="bi bi-telephone-fill me-2 text-white"></i> 81.1772.5859
            </p>
            <p className="text-white">
              <i className="bi bi-whatsapp me-2 text-white"></i> 811.8066.522
            </p>
            <h5 className="fw-bold text-white">Ventas Mayoreo:</h5>
            <a href="mailto:e.patlan@hotmail.com" className="text-white text-decoration-underline">
              e.patlan@hotmail.com
            </a>
          </div>

          {/* Formulario de Suscripción */}
          <div className="col-md-6 text-center py-4">
            <p className="text-white">
              ¡Suscríbete para que estés al tanto de nuestros nuevos productos y promociones!
            </p>
            <form onSubmit={sendEmail} className="d-flex justify-content-center">
              <input
                type="email"
                className="form-control me-2"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ maxWidth: '300px' }}
              />
              <button className="btn btn-dark" type="submit">
                Suscribir
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-2 text-white">
          © 2024 Patlán Electrodomésticos
        </div>
      </footer>

      
    </div>
  );
}

export default App;
