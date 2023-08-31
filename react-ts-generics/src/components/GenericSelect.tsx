import { BaseType } from "../types/types.ts";
import { ChangeEvent } from "react";

interface GenericSelectProps<TValue> {
  values: TValue[];
  onChange: (value: TValue) => void;
}

export const GenericSelect = <TValue extends BaseType>({
  values,
  onChange,
}: GenericSelectProps<TValue>) => {
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const val = values.find((value) => value.id === e.target.value);

    if (val) onChange(val);
  };
  return (
    <select onChange={onSelectChange}>
      {values.map((value) => (
        <option key={value.id} value={value.id}>
          {value.title}
        </option>
      ))}
    </select>
  );
};
