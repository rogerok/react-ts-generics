import { BaseType } from "../../types/types.ts";
import { ChangeEvent } from "react";

interface GenericSelectProps<TValue> {
  values: TValue[];
  onChange: (value: TValue) => void;
}

export const GenericSelectTest = <TValue extends BaseType>(
  props: GenericSelectProps<TValue>,
): JSX.Element => {
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = props.values.find((item) => item.id === event.target.value);
    console.log(event.target.value);
    if (value) {
      props.onChange(value);
    }
  };

  return (
    <>
      Select test
      <select onChange={onSelectChange}>
        {props.values.map((value) => (
          <option key={value.title} value={value.id}>
            {value.title}
          </option>
        ))}
      </select>
    </>
  );
};
