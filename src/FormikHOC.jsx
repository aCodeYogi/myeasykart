import React from "react";
import { useField } from "formik";

function FormikHOC(IncomingComponent) {
  function OutgoingComponent({ name, ...rest }) {
    const field = useField(name);

    console.log(name, field);

    const [data, meta] = field;

    const { value, onBlur, onChange } = data;
    const { error, touched } = meta;

    let borderClass = "border-gray-300 focus:border-indigo-500 ";

    if (error && touched) {
      borderClass = "border-red-500";
    }

    return (
      <IncomingComponent
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        error={error}
        touched={touched}
        name={name}
        {...rest}
      />
    );
  }

  return OutgoingComponent;
}

export default FormikHOC;
