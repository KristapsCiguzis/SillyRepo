import React from 'react';

const ModalImage = ({ modalImage, closeModal }) => (
  <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
    onClick={closeModal}
  >
    <div 
      className="relative" 
      onClick={(e) => e.stopPropagation()}
    >
      <img 
        src={modalImage} 
        alt="Large View" 
        className="rounded-lg cursor-pointer shadow-lg max-h-screen"
        style={{ maxWidth: "100%", height: "auto", transition: "max-width 0.3s ease" }}
        onClick={closeModal}
      />
    </div>
  </div>
);

export default ModalImage;
