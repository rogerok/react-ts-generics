import { BaseType } from "../types/types.ts";
import { ChangeEvent } from "react";
import { getStringFromValue } from "../utils/utils.ts";

interface GenericSelectProps<TValue> {
  titleKey?: keyof TValue;
  values: Readonly<TValue[]>;
  onChange: (value: TValue) => void;
  formatLabel: (value: TValue) => string;
}

export const GenericSelect = <TValue extends BaseType>({
  values,
  onChange,
  formatLabel,
}: GenericSelectProps<TValue>) => {
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const val = values.find(
      (value) => getStringFromValue(value) === e.target.value,
    );

    if (val) onChange(val);
  };

  return (
    <div>
      from tutorial
      <select onChange={onSelectChange}>
        {values.map((value) => (
          <option
            key={getStringFromValue(value)}
            value={getStringFromValue(value)}
          >
            {formatLabel(value)}
          </option>
        ))}
      </select>
    </div>
  );
};
