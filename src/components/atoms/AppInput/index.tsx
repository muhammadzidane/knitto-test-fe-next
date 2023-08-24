import { AppText } from "@/components";

// CVA
import { type IAppInputProps, input } from "./cva";

/**
 * Base input component
 */
const AppInput: React.FC<IAppInputProps> = ({
  className,
  type = "text",
  name,
  placeholder,
  label,
  errorMessage,
  ...props
}) => {
  const inputClassName = input({ className });

  return (
    <div className="mb-5">
      {label !== undefined && (
        <AppText className="mb-2" size="small" weight="xbold">
          {label}
        </AppText>
      )}
      <input
        type={type}
        name={name}
        className={inputClassName}
        placeholder={placeholder}
        {...props}
      />
      {errorMessage !== undefined && (
        <AppText className="input__error-message">{errorMessage}</AppText>
      )}
    </div>
  );
};

export default AppInput;
