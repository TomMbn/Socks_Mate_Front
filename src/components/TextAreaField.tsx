import React from 'react';
import '../styles/TextAreaField.css';

interface TextAreaFieldProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label }) => {
  return (
    <div className="textarea-field">
      <label className="inputLabel">{label}</label>
      <textarea className="textarea" rows={4} required></textarea>
    </div>
  );
};

export default TextAreaField;
