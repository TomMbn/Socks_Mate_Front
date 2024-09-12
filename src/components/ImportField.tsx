import React from 'react';
import '../styles/InputField.css';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  onChange,
}) => {
  return (
    <div className="inputField">
      <label className="inputLabel" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        accept='image/*'
        required
      />
    </div>
  );
};

export default InputField;
