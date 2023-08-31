import { FC } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  onChange: (value: string) => void;
}

export const Select: FC<SelectProps> = ({ options, onChange }) => {
  return (
    <select
      onChange={(event) => {
        onChange(event.target.value);
      }}
    >
      {options.map((option) => (
        <option key={option.value}>{option.label}</option>
      ))}
    </select>
  );
};
