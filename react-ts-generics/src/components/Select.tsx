import { FC } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  onChange: (value: string) => void;
}

export const Select: FC<SelectProps> = () => {
  return <div>Select</div>;
};
