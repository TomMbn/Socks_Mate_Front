import React from 'react';
import '../styles/InputField.css';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
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
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
