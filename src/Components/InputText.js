import React from 'react';

const InputText = ({ type, arrayInput, arrayRadioButton, handle }) => {

   // const handleChangeText = () => {
   //    handle
   // }

   if (type !== "radio") {
      return (
         <div className='InputText'>
            <label className="labelInput" htmlFor={arrayInput.id}>{arrayInput.title}: </label>
            <input type={type} id={arrayInput.id} name={arrayInput.id} onChange={handle} value={arrayInput.value} autocomplete="off"/>
         </div>
      );
   } else {
      return (
         <div className='InputText'>
            {arrayRadioButton.array.map((items, index) => (
               <div key={index}>
                  <label htmlFor={items.id} className="inpRadio">
                     <input type="radio" id={items.id} name={arrayRadioButton.nameButton} value={items.valueBotton} />
                     {items.title}
                     <span></span>
                  </label>
               </div>
            ))}
         </div>
      );
   }
};

export default InputText;