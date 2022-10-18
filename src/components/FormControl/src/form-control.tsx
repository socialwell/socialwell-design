import React, {
  HTMLInputTypeAttribute,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  FormControlWrapper,
  Input,
  Label,
  SelectInputField,
  SelectWrapper,
  Textarea,
} from "./styles/formControlStyles";

export interface FormControlProps {
  inputType: "text" | "select" | "textarea";
  size?: "sm" | "md";
  label: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  name: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

export const FormControl: React.FC<FormControlProps> = ({
  inputType = "text",
  size = "md",
  label,
  name,
  value,
  type = "text",
  onChange,
}) => {
  if (inputType === "textarea") {
    return (
      <FormControlWrapper>
        <Label htmlFor={label}>{label}</Label>
        <Textarea id={label} value={value} name={name} onChange={onChange} />
      </FormControlWrapper>
    );
  }
  return (
    <FormControlWrapper>
      <Label htmlFor={label}>{label}</Label>
      <Input
        inputSize={size}
        type={type}
        id={label}
        name={name}
        value={value}
        onChange={onChange}
      />
    </FormControlWrapper>
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

export type SelectFormControlProps = {
  options: SelectOption[];
  disabled?: boolean;
  label: string;
} & (SingleSelectProps | MultipleSelectProps);

export const SelectFormControl: React.FC<SelectFormControlProps> = ({
  multiple,
  value,
  onChange,
  options,
  disabled = false,
  label,
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
    <SelectWrapper>
      <div className="label">{label}</div>
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
    </SelectWrapper>
  );
};
