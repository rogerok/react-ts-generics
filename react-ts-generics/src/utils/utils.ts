import { BaseType } from "../types/types.ts";

export const getStringFromValue = <TValue extends BaseType>(
  value: TValue,
): string => {
  if (typeof value === "string") {
    return value;
  } else {
    return value.id;
  }
};
