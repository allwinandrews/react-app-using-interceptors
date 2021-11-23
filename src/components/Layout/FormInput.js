import Input from "react-validation/build/input";

export default function FormInput({
  name,
  type,
  value,
  handleChange,
  validations,
  className,
  title,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{title}</label>
      <Input
        type={type}
        className={className}
        name={name}
        value={value}
        onChange={handleChange}
        validations={validations}
      />
    </div>
  );
}
