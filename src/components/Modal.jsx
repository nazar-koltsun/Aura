import ReactDOM from "react-dom";
import Card from "./Card";
import CloseIconRounded from "./icons/CloseIconRounded";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div>
      <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 flex z-40" onClick={onClose}></div>
      <Card className="fixed w-[320px] overflow-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-6 pt-8 pb-7 border border-[var(--bright-gray-secondary)] rounded-lg">
        <button
          className="absolute top-0.5 right-1.5 w-8 h-7 flex justify-center items-center hover:opacity-70"
          onClick={onClose}
        >
          <CloseIconRounded />
        </button>
        {children}
      </Card>

    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;