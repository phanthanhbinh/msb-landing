import { DatePicker } from "antd";
import { CSSProperties } from "react";
import dayjs from "dayjs";
import locale from "./vn_VN";

type CustomDatePickerProps = {
  value?: string;
  onChange?: (value: string | undefined) => void;
  style?: CSSProperties;
  placeholder?: string;
  className?: string;
  disableDate?: (date: any) => boolean;
  format?: string;
  showTime?: boolean;
  defaultValue?: any | undefined;
  disabled?: boolean;
};

const CustomDatePicker: React.FC<CustomDatePickerProps> = (props: CustomDatePickerProps) => {
  const { value, onChange, placeholder = "", style, ...rest } = props;
  return (
    <DatePicker
      defaultValue={props.defaultValue}
      style={style}
      value={value ? dayjs(value, "DD-MM-YYYY") : undefined}
      placeholder={placeholder}
      onChange={(v, dateString) => {
        onChange && onChange(dateString);
      }}
      disabledDate={props.disableDate}
      className={props.className}
      format={"DD-MM-YYYY"}
      showTime={props.showTime}
      locale={locale}
      {...rest}
    />
  );
};

export default CustomDatePicker;
