import type {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  ReactNode,
} from "react";
import { forwardRef } from "react";
import { useModal } from "../Modal";
import type { InputContainerProps } from "./InputContainer";
import { InputContainer } from "./InputContainer";
import type { InputCommonProps } from "./types";

interface InputProps extends InputContainerProps, InputCommonProps {
  left?: ReactNode;
  right?: ReactNode;
  htmlType?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  min?: string;
  max?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    left,
    right,
    placeholder,
    label,
    className,
    htmlType,
    onChange,
    value,
    min,
    max,
    required,
    variant,
  },
  ref
) {
  const [focused, focus, blur] = useModal();
  return (
    <InputContainer
      focused={focused}
      variant={variant}
      label={label}
      className={className}
    >
      {left && <span>{left}</span>}
      <input
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        type={htmlType}
        ref={ref}
        placeholder={placeholder}
        className="flex-1 h-full bg-transparent"
        required={required}
        onFocus={focus}
        onBlur={blur}
      />
      {right && <span>{right}</span>}
    </InputContainer>
  );
});

export default Input;
