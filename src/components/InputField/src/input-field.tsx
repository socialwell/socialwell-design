import React, {
  HTMLInputTypeAttribute,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  InputWrapper,
  TextInput,
  SelectInputField,
  TextAreaInputField,
} from "./styles/inputFieldStyles";

export interface InputTextProps {
  size?: "md" | "lg";
  icon?: ReactNode;
  isInvalid?: boolean;
  value: string;
  name?: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// export interface SelectProps {
//   children: React.ReactNode;
//   size?: "md" | "lg";
//   isInvalid?: boolean;
//   value: string;
//   name?: string;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
// }

export interface TextareaProps {
  isInvalid?: boolean;
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextField: React.FC<InputTextProps> = ({
  icon,
  size = "md",
  isInvalid = false,
  value,
  onChange,
  name = "",
  type = "text",
  placeholder,
  ...restProps
}) => {
  return (
    <InputWrapper inputSize={size} isInvalid={isInvalid}>
      {icon}
      <TextInput
        {...restProps}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export type SelectOption = {
  label: string;
  value: string | number;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export type SelectProps = {
  options: SelectOption[];
  disabled?: boolean;
} & (SingleSelectProps | MultipleSelectProps);

export const SelectField: React.FC<SelectProps> = ({
  multiple,
  value,
  onChange,
  options,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    if (disabled) return;
    multiple ? onChange([]) : onChange(undefined);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function selectOption(option: SelectOption) {
    if (disabled) return;

    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    if (disabled) return;
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (disabled) return;
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      containerRef.current?.removeEventListener("keydown", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, highlightedIndex, options]);
  return (
    <SelectInputField
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      disabled={disabled}
    >
      <span className="value">
        {multiple
          ? value.map((v) => (
              <button
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className="option-badge"
              >
                {v.label}
                <span className="remove-btn">&times;</span>
              </button>
            ))
          : value?.label}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className="clear-btn"
      >
        &times;
      </button>
      <div className="divider"></div>
      <div className="caret"></div>
      {!disabled && (
        <ul className={`options ${isOpen ? "show" : ""}`}>
          {options.map((option, index) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.value}
              className={`option ${
                isOptionSelected(option) ? "selected" : ""
              } ${index === highlightedIndex ? "highlighted" : ""}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </SelectInputField>
  );
};

export const TextAreaField: React.FC<TextareaProps> = ({
  isInvalid = false,
  value,
  name = "",
  onChange,
  ...restProps
}) => {
  return (
    <TextAreaInputField
      {...restProps}
      value={value}
      onChange={onChange}
      isInvalid={isInvalid}
      name={name}
    ></TextAreaInputField>
  );
};
