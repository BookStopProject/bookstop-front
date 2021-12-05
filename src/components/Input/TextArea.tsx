import type { ChangeEventHandler } from "react";
import { forwardRef } from "react";
import { useModal } from "../Modal";
import type { InputContainerProps } from "./InputContainer";
import { InputContainer } from "./InputContainer";
import type { InputCommonProps } from "./types";

interface TextAreaProps extends InputContainerProps, InputCommonProps {
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  maxLength?: number;
  rows: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function Input(
  { placeholder, label, className, onChange, value, maxLength, rows, variant },
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
      <textarea
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        ref={ref}
        placeholder={placeholder}
        className="flex-1 h-full bg-transparent"
        rows={rows}
        onFocus={focus}
        onBlur={blur}
      />
    </InputContainer>
  );
});

export default TextArea;
