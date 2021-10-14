import React, { useState } from 'react';
import InputText from '../Components/InputText';
import '../css/Antecedentes.css';

const Antecedentes = () => {

   const [data, setData] = useState({
      jardin: ""
   })

   const fecha = new Date();

   const hnadleInputText = (e) => {
      const newData = { ...data };
      newData[e.target.name] = e.target.value;
      setData(newData);
      console.log(data);
   }

   return (
      <div className='Antecedentes content'>
         <h1>Antecedentes de salud general y bucal del niño(a)</h1>
         <h3>(Formato para diligenciar antes de la valoración)</h3>

         <div className="formAntecedentes">
            <div className="fecha">
               <p>{fecha.getDate()}</p>
               <p>{fecha.getMonth() + 1}</p>
               <p>{fecha.getFullYear()}</p>
            </div>

            <div>
               <InputText type="text" arrayInput={{ id: "jardin", title: "Jardín" }} handle={hnadleInputText} />
               <InputText
                  type="radio"
                  arrayRadioButton={
                     {
                        nameButton: "Rural",
                        array: [
                           { id: "Radio1", title: "Rural", valueBotton: "Rural" },
                           { id: "Radio2", title: "Urbano", valueBotton: "Urbano" }
                        ]
                     }}
                  handle={hnadleInputText} />
            </div>

            <hr />

            <div>
               <InputText type="text" arrayInput={{ id: "nombre", title: "Nombre del niño(a)" }} handle={hnadleInputText} />
               <InputText type="text" arrayInput={{ id: "apellido", title: "Apellidos" }} handle={hnadleInputText} />
               <InputText type="text" arrayInput={{ id: "numDocumento", title: "N° Documento" }} handle={hnadleInputText} />
               <InputText type="text" arrayInput={{ id: "edad", title: "Edad" }} handle={hnadleInputText} />
               <InputText type="date" arrayInput={{ id: "fechaNacimiento", title: "Fecha de nacimiento" }} handle={hnadleInputText} />
               <InputText type="text" arrayInput={{ id: "lugarNacimiento", title: "Lugar de nacimiento" }} handle={hnadleInputText} />

            </div>
            <div>
               <InputText type="text" arrayInput={{ id: "nombre", title: "Dirección de residencia" }} handle={hnadleInputText} />
               <InputText type="text" arrayInput={{ id: "nombre", title: "Barrio" }} handle={hnadleInputText} />
               <InputText
                  type="radio"
                  arrayRadioButton={
                     {
                        nameButton: "Rural2",
                        array: [
                           { id: "Radio1", title: "Rural", valueBotton: "Rural" },
                           { id: "Radio2", title: "Urbano", valueBotton: "Urbano" }
                        ]
                     }}
                  handle={hnadleInputText}
               />

            </div>

            <div>
               <InputText
                  type="radio"
                  arrayRadioButton={
                     {
                        nameButton: "subsidio",
                        array: [
                           { id: "Aseguramiento", title: "Aseguramiento subsidiado", valueBotton: "aseguramiento" },
                           { id: "Contributivo", title: "Contributivo", valueBotton: "contributivo" },
                           { id: "Otro", title: "Otro", valueBotton: "otro" }

                        ]
                     }}
                  handle={hnadleInputText}
               />
               <InputText type="text" arrayInput={{ id: "eps", title: "E.P.S." }} handle={hnadleInputText} />
            </div>
            <div>
               <InputText type="text" arrayInput={{ id: "pResponsable", title: "Persona responsable-Tutor del niño(a)" }} handle={hnadleInputText} />
               <InputText type="number" arrayInput={{ id: "pIdentificación", title: "Identificación" }} handle={hnadleInputText} />
               <InputText type="number" arrayInput={{ id: "pTeléfono", title: "Teléfono(s)" }} handle={hnadleInputText} />
               <InputText type="text" arrayInput={{ id: "pParentesco", title: "Parentesco con el niño(a)" }} handle={hnadleInputText} />
            </div>

            <h1><b>Cordial saludo</b>, antes de realizar la valoración odontológica al niño(a), es importante conocer sus antecedentes médicos y odontológicos</h1>
            <h3>Maque con una X una de las opciones:</h3>

            <ol type="1">
               <li>¿Cuándo fue la última vez que el niño(a) asistió a consulta con el Médico?
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "ultimaConsulta",
                           array: [
                              { id: "1mes", title: "1 mes", valueBotton: "aseguramiento" },
                              { id: "3a6meses", title: "3 a 6 meses", valueBotton: "contributivo" },
                              { id: "6meses", title: "Más de 6 meses", valueBotton: "otro" },
                              { id: "1año", title: "Más de 1 año", valueBotton: "otro" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
               </li>

               <li>¿¿Cuál? fue el motivo de la Consulta Médica del niño(a)?
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "motivoConsulta",
                           array: [
                              { id: "1mes", title: "Control (Crecimiento y desarrollo)", valueBotton: "aseguramiento" },
                              { id: "3a6meses", title: "Vacunación", valueBotton: "contributivo" },
                              { id: "6meses", title: "Urgencias", valueBotton: "otro" },
                              { id: "1año", title: "Otra", valueBotton: "otro" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
                  <InputText type="text" arrayInput={{ id: "textPregunta2", title: "¿Cuál?" }} handle={hnadleInputText} />
               </li>

               <li>Fecha del último control médico:
                  <InputText type="date" arrayInput={{ id: "fechaControlMedico", title: "¿Cuál?" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "talla", title: "Talla" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "peso", title: "Peso" }} handle={hnadleInputText} />
               </li>

               <li>¿Durante el periodo de embarazo hubo alguna complicación?
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "ComplicacionEmbarazo",
                           array: [
                              { id: "ComplicacionEmbarazo_Si", title: "Si", valueBotton: "Si" },
                              { id: "ComplicacionEmbarazo_No", title: "No", valueBotton: "No" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
                  <InputText type="text" arrayInput={{ id: "textPregunta4", title: "¿Cuál?" }} handle={hnadleInputText} />
               </li>


               <li>¿El parto fue en el tiempo esperado?
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "tiempoEsperado",
                           array: [
                              { id: "tiempoEsperado_si", title: "Si", valueBotton: "Si" },
                              { id: "tiempoEsperado_no", title: "No", valueBotton: "No" },
                              { id: "tiempoEsperado_antes", title: "(Antes", valueBotton: "Antes" },
                              { id: "tiempoEsperado_despues", title: "o Después", valueBotton: "Después" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
                  de lo esperado)
               </li>


               <li>¿Desde que el niño(a) nació hasta la fecha, ha sufrido de alguna enfermedad?
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "enfermedadAntiguna",
                           array: [
                              { id: "enfermedadAntiguna_Si", title: "Si", valueBotton: "Si" },
                              { id: "enfermedadAntiguna_No", title: "No", valueBotton: "No" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
                  <InputText type="text" arrayInput={{ id: "textPregunta6", title: "¿Cuál?" }} handle={hnadleInputText} />
               </li>


               <li>¿El niño(a) ha estado hospitalizado?
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "hospitalizacion",
                           array: [
                              { id: "hospitalizacion_Si", title: "Si", valueBotton: "Si" },
                              { id: "hospitalizacion_No", title: "No", valueBotton: "No" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
                  <InputText type="text" arrayInput={{ id: "textPregunta71", title: "¿Cuánto tiempo?" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "textPregunta72", title: "¿Por qué?" }} handle={hnadleInputText} />

               </li>


               <li>¿El niño(a) está tomando algún medicamento de rutina?
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "medicamento",
                           array: [
                              { id: "medicamento_Si", title: "Si", valueBotton: "Si" },
                              { id: "medicamento_No", title: "No", valueBotton: "No" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
                  <InputText type="text" arrayInput={{ id: "textPregunta81", title: "¿Cuál?" }} handle={hnadleInputText} />
               </li>


               <li>¿Le han practicado al niño(a) alguna cirugía?
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "hospitalizacion",
                           array: [
                              { id: "hospitalizacion_Si", title: "Si", valueBotton: "Si" },
                              { id: "hospitalizacion_No", title: "No", valueBotton: "No" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
                  <InputText type="text" arrayInput={{ id: "textPregunta72", title: "¿Cuál?" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "textPregunta71", title: "¿Hace cuánto?" }} handle={hnadleInputText} />
               </li>


               <li>¿De acuerdo con recomendación del médico, el niño(a) requiere algún cuidado especial para la atención odontológica?
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "cuidadoEspecial",
                           array: [
                              { id: "cuidadoEspecial_Si", title: "Si", valueBotton: "Si" },
                              { id: "cuidadoEspecial_No", title: "No", valueBotton: "No" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
                  <InputText type="text" arrayInput={{ id: "textPregunta72", title: "¿Cuál?" }} handle={hnadleInputText} />
               </li>


               <li>
                  <InputText type="text" arrayInput={{ id: "textPregunta72", title: "Fecha en la que se tomó talla y peso al niño(a)" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "talla", title: "Talla" }} handle={hnadleInputText} />
                  <InputText type="text" arrayInput={{ id: "peso", title: "Peso" }} handle={hnadleInputText} />
               </li>


               <li>¿Lo ha llevado al odontólogo en el último año?
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "cuidadoEspecial",
                           array: [
                              { id: "cuidadoEspecial_Si", title: "Si", valueBotton: "Si" },
                              { id: "cuidadoEspecial_No", title: "No", valueBotton: "No" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
                  <InputText type="text" arrayInput={{ id: "textPregunta72", title: "¿Cada cuánto tiempo acostumbra llevarlo?" }} handle={hnadleInputText} />
               </li>


               <li>¿La última vez que llevo al niño(a) al odontólogo cuál fue el motivo?
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "cuidadoEspecial",
                           array: [
                              { id: "cuidadoEspecial_Si", title: "Valoración", valueBotton: "Valoración" },
                              { id: "cuidadoEspecial_No", title: "Aplicación Flúor", valueBotton: "Aplicación Flúor" },
                              { id: "cuidadoEspecial_Si", title: "Limpieza", valueBotton: "Limpieza" },
                              { id: "cuidadoEspecial_No", title: "Calzar Dientes", valueBotton: "Calzar Dientes" },
                              { id: "cuidadoEspecial_Si", title: "Retirar nervio del diente", valueBotton: "Retirar nervio del diente" },
                              { id: "cuidadoEspecial_No", title: "Retirar un diente", valueBotton: "Retirar un diente" },
                              { id: "cuidadoEspecial_Si", title: "Urgencia (dolor, absceso...)", valueBotton: "Urgencia (dolor, absceso...)" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
                  <InputText type="text" arrayInput={{ id: "textPregunta72", title: "¿Hace cuánto?" }} handle={hnadleInputText} />

               </li>

               <li>La experiencia en las visitas previas del niño(a) al odontólogo han sido:
                  <InputText
                     type="radio"
                     arrayRadioButton={
                        {
                           nameButton: "cuidadoEspecial",
                           array: [
                              { id: "cuidadoEspecial_Si", title: "Muy buenas", valueBotton: "Si" },
                              { id: "cuidadoEspecial_No", title: "Buenas", valueBotton: "No" },
                              { id: "cuidadoEspecial_Si", title: "Poco agradables", valueBotton: "Si" },
                              { id: "cuidadoEspecial_No", title: "Malas", valueBotton: "No" }
                           ]
                        }}
                     handle={hnadleInputText}
                  />
               </li>




            </ol>
         </div>
      </div>
   );
};

export default Antecedentes;