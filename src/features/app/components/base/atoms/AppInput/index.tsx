import { AppText } from "@/features/app/components";

import { type IAppInputProps, input } from "./cva";
import "./styles.scss";

/**
 * Base input component
 */
const AppInput: React.FC<IAppInputProps> = ({
  type = "text",
  errorMessage,
  placeholder,
  className,
  label,
  name,
  ...props
}) => {
  const inputClassName = input({ className });

  return (
    <div className="mb-5">
      {label !== undefined && (
        <AppText className="mb-2" weight="xbold" size="small">
          {label}
        </AppText>
      )}
      <input
        className={inputClassName}
        placeholder={placeholder}
        name={name}
        type={type}
        {...props}
      />
      {errorMessage !== undefined && (
        <AppText className="input__error-message">{errorMessage}</AppText>
      )}
    </div>
  );
};

export default AppInput;
