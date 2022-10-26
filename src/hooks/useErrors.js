import { useCallback, useState } from 'react';

export function useErrors() {
  const [errors, setErrors] = useState([]);

  const setError = useCallback(({ field, message }) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevErrors) => [
      ...prevErrors,
      { field, message },
    ]);
  }, [errors]);

  const removeError = useCallback((fieldName) => {
    setErrors((prevErrors) => prevErrors.filter(
      (error) => error.field !== fieldName,
    ));
  }, []);

  const getErrorMessageByFieldName = useCallback((fieldName) => (
    errors.find((error) => error.field === fieldName)?.message
  ), [errors]);

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
