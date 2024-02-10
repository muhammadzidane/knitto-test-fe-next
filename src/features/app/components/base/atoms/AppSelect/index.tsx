import { type IAppSelectProps } from "./cva";

/**
 * Base select component
 */
const AppSelect: React.FC<IAppSelectProps> = ({ options = [], onChange }) => {
  const onChangeLimit = (event: any): void => {
    onChange(event.target.value);
  };

  return (
    <select onChange={onChangeLimit} placeholder="...">
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default AppSelect;
