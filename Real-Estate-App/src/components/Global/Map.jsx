import React from "react";

const Map = () => {
  return (
    <div className="p-4 mt-6 " >
      <h2 className="text-xl font-semibold mb-4">Map Location</h2>
      <div className="w-full h-96 rounded-md shadow-md overflow-hidden p-4">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799191449!2d77.3507359748809!3d12.953959987554994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c20e9b97%3A0xd979eb02f843d6d9!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1698771625172!5m2!1sen!2sus"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
