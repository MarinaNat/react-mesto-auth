import React from "react";
import PopupOutOfForm from "./PopupOutOfForm";
// import unionOk from "../images/union.svg";
// import unionFalse from "../images/unionFalse.svg";

// const InfoTooltip = ({img, title, onClose, isOpen}) => {
//   return (
//       <div className={`popup ${isOpen && 'popup_opened'}`}
//            onClick={e => (e.currentTarget === e.target) && onClose()}
//       >
//           <div className="popup__container">
//               <div className='popup__tooltip-container'>
//                   <img src={img} alt='icon' className='popup__tooltip-img' />
//                   <h2 className='tool-tip__titlee'>{title}</h2>
//                   <button type="reset"
//                           className="popup__reset-button page__button"
//                           onClick={onClose}
//                   />
//               </div>
//           </div>
//       </div>
//   );
// };

const InfoTooltip = ({ img, title, onClose, isOpen }) => {
  return (
    <PopupOutOfForm
      // name={name}
      isOpen={isOpen}
      onClose={onClose}
      // selector="popup_tool-tip"
    >
      {/* <div className="tool-tip"> */}
        <img
          className="tool-tip__image"
          src={img} alt='icon'
          // src={registrationResult ? unionOk : unionFalse}
          // alt={registrationResult ? "Ок" : "Err"}
        />
        <h2 className="tool-tip__title">
          {title}
        </h2>
      {/* </div> */}
    </PopupOutOfForm>
  );
};

export default InfoTooltip;
