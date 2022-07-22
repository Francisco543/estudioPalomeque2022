import React from 'react';
import '../css/estilocards.css';
import imgaudit from './assets/imagenes/auditoria2.png'
import imgproceso from './assets/imagenes/proceso-de-diseno.png'
import imgcapacitacion from './assets/imagenes/capacitacion.png'
import imgentrevista from './assets/imagenes/entrevista.png'
import imgarchivo from './assets/imagenes/archivo.png'
const Sectores = () => {
    return (  
<div className="container" id="irSectores">
  <div className="card" id="card1">
    <h1 className="titulo">Diseño de procesos</h1>
    <img src={imgproceso} alt="proceso"></img>
    <p className="descripcion">Elaboración y Adecuación de Políticas y Procedimientos para su Implementación y Cumplimiento Normativo. Manuales. Códigos. Lineamientos</p>
  </div>

  <div className="card" id="card2" >
  <h1 className="titulo">REI</h1>
  <p className="descripcion">Revisor Externo Independiente: Unidad de Información Financiera (UIF). Emisión y presentación ante la UIF de informes de revisión externa independiente vinculadas al cumplimiento, por su parte de los Sujetos Obligados</p>
  </div>

  <div className="card" id="card3">
  <h1 className="titulo">Capacitacion</h1>
  <img src={imgcapacitacion} alt="capacitacion"></img>
  <p className="descripcion">Diseño y Elaboracion de Programas de Capacitación para los distintos niveles de recursos humanos</p>
    </div>
<div className="card"id="card4">

<h1 className="titulo">Auditoria</h1>
      <img src={imgaudit} alt="auditoria"></img>
  <p className="descripcion">Control interno global de identificación, evaluación, migración y monitoreo de Riesgos de LA/FT. Revisiones integrales para la identificación de deficiencias o mejoras a aplicar</p>
    </div>
<div className="card"id="card5">
<h1 className="titulo">Comite</h1>
<img src={imgentrevista} alt="comite"></img>
  <p className="descripcion">Participación en Comité de Compliance o PLA&FT Redacción de Minutas. Seguimiento de temas tratados.</p>
    </div>
<div className="card"id="card6">
<h1 className="titulo">Requerimientos</h1>
<img src={imgarchivo} alt="requerimientos"></img>
  <p className="descripcion">Asistencia en Requerimientos o Procesos de Supervisión de Organismos de Control/Reguladores</p>
    </div>
</div>
    );

}
 
export default Sectores;

