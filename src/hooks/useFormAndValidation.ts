import { ChangeEvent, useCallback, useState } from "react";

export type TValues = {
  name?: string;
  email?: string;
  password?: string;
  code?: string;
};

type TErrors<T> = {
  [key: string]: T;
}

export function useFormAndValidation() {
  const [values, setValues] = useState<TValues>({});
  const [errors, setErrors] = useState<TErrors<string>>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form")!.checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
    setErrors,
  };
}
