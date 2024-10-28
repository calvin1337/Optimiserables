import React from 'react';
import './Loader.css'; // Import the CSS file for styling

const CubeLoader = () => {
  return (
    <div className="loader-container">
      <svg
        version="1.1"
        id="L9"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
      >
        <rect x="10" y="50" width="4" height="10" fill="#fff">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="25" y="50" width="4" height="10" fill="#fff">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.1s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="40" y="50" width="4" height="10" fill="#fff">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="55" y="50" width="4" height="10" fill="#fff">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="70" y="50" width="4" height="10" fill="#fff">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="85" y="50" width="4" height="10" fill="#fff">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.5s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default CubeLoader;
