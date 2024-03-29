import { Input } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import React, { useEffect, useState } from "react";
import { CSSProperties, useCallback } from "react";
import { RegUtil } from "utils/RegUtils";

interface NumberInputProps {
  id?: string;
  value?: number | string;
  isFloat?: boolean;
  addonBefore?: string;
  addonAfter?: string;
  onChange?: (v: number | null) => void;
  onBlur?: (e: any) => void;
  onKeyPress?: (event: any) => void;
  onKeyDown?: (event: any) => void;
  onPressEnter?: (event: any) => void;
  style?: CSSProperties;
  placeholder?: string;
  format?: (a: string) => string;
  replace?: (a: string) => string;
  suffix?: React.ReactNode;
  maxLength?: number;
  minLength?: number;
  className?: string;
  min?: number;
  max?: number;
  default?: number | null;
  prefix?: React.ReactNode;
  autoFocus?: boolean;
  onFocus?: (e: any) => void;
  disabled?: boolean;
  step?: number;
  isChangeAfterBlur?: boolean; // khi blur thì gọi lại hàm onChange
  size?: SizeType;
  allowClear?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = (props: NumberInputProps) => {
  const {
    replace,
    value,
    isFloat,
    addonBefore,
    addonAfter,
    onChange,
    placeholder,
    onKeyPress,
    onKeyDown,
    onPressEnter,
    style,
    format,
    onBlur,
    suffix,
    maxLength,
    minLength,
    className,
    prefix,
    id,
    onFocus,
    disabled = false,
    step,
    isChangeAfterBlur = true,
    size,
    allowClear = false,
  } = props;
  const [data, setData] = useState<string>("");
  const onChangeText = useCallback(
    (e: any) => {
      let newValue: string = e.target.value;
      let valueS = format ? (replace ? replace(newValue) : newValue) : newValue;
      if (valueS === "") {
        setData(valueS);
        onChange && onChange(null);
        return;
      }
      if (isFloat) {
        if (RegUtil.FLOATREG.test(valueS)) {
          setData(valueS);
          if (valueS[valueS.length - 1] !== ".") {
            onChange && onChange(parseFloat(valueS));
          }
          return;
        }
      }
      if (RegUtil.NUMBERREG.test(valueS)) {
        setData(valueS);
        onChange && onChange(parseInt(valueS));
        return;
      }
    },
    [format, isFloat, onChange, replace]
  );
  const onBlurEvent = useCallback(
    (e: any) => {
      let temp = value?.toString();
      let valueTemp = temp;
      if (temp !== undefined && value !== undefined) {
        if (temp.charAt(temp.length - 1) === "." || temp === "-") {
          valueTemp = temp.slice(0, -1);
        }
        if (props.min !== undefined && Number(value) < props.min && value !== undefined) {
          onChange && onChange(props.min);
        } else if (props.max !== undefined && Number(value) > props.max && value !== undefined) {
          onChange && onChange(props.max);
        } else {
          onChange && valueTemp && isChangeAfterBlur && onChange(parseFloat(valueTemp.replace(/0*(\d+)/, "$1")));
        }
      } else {
        if (props.default !== undefined) {
          onChange && onChange(props.default);
        }
      }
      onBlur && onBlur(e);
    },
    [onBlur, onChange, props, value, isChangeAfterBlur]
  );
  useEffect(() => {
    setData(value !== null && value !== undefined && value !== "" ? value.toString() : "");
  }, [value]);

  return (
    <Input
      size={size}
      id={id}
      className={className}
      placeholder={placeholder}
      value={format ? format(data) : data}
      style={{ textAlign: "right", ...style }}
      onBlur={onBlurEvent}
      onKeyPress={onKeyPress}
      onKeyDown={onKeyDown}
      onChange={onChangeText}
      onPressEnter={onPressEnter}
      suffix={suffix}
      maxLength={maxLength}
      minLength={minLength}
      onFocus={(e) => {
        e.target.select();
        onFocus && onFocus(e);
      }}
      prefix={prefix}
      autoFocus={props.autoFocus}
      disabled={disabled}
      allowClear={allowClear}
      step={step}
      addonBefore={addonBefore}
      addonAfter={addonAfter}
    />
  );
};

export default NumberInput;
