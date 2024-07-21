// components/Global/NameInputField.jsx
import React from "react";

const NameInputField = ({ labelName, value, onChange }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">{labelName}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
      />
    </div>
  );
};

export default NameInputField;
