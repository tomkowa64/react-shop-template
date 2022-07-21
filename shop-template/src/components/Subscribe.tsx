import React from "react";

export const Subscribe = () => {
  return (
    <div className="w3-container w3-black w3-padding-32">
      <h1>Subscribe</h1>
      <p>To get special offers and VIP treatment:</p>
      <p>
        <input
          className="w3-input w3-border w3-width-100"
          type="text"
          placeholder="Enter e-mail"
        />
      </p>
      <button type="button" className="w3-button w3-red w3-margin-bottom">
        Subscribe
      </button>
    </div>
  );
};
