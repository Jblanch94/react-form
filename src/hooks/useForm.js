const useForm = (formValues, fn) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    fn(formValues);
  };

  return [onFormSubmit];
};

export default useForm;
