import { CSSProperties, ReactNode } from "react";
import { SelectProps, Select as ANTSelect } from "antd";
import classNames from "classnames";

const strForSearch = (str: String) => {
  return str
    ? str
        .normalize("NFD")
        .toLowerCase()
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
    : str;
};

const fullTextSearch = (textSearch: string, value: string) => {
  if (typeof textSearch === "string" && typeof value === "string") {
    const text = strForSearch(textSearch.trim());
    const valueStr = strForSearch(value);
    return text.split(/\s+/).every((word) => valueStr.indexOf(word) > -1);
  } else {
    return false;
  }
};
interface IProps extends SelectProps<any> {
  style?: CSSProperties;
  containerStyle?: CSSProperties;
  className?: string;
  containerClassName?: string;
  suffix?: ReactNode;
  isDropdownAlwaysAtBottomLeft?: boolean;
}

const { Option, OptGroup } = ANTSelect;

const CustomSelect = (props: IProps) => {
  const {
    suffix,
    style,
    className,
    containerClassName,
    containerStyle,
    isDropdownAlwaysAtBottomLeft = true,
    ...rest
  } = props;

  return (
    <div className={classNames("custom-select", className, suffix && "custom-select-has-suffix")} style={style}>
      <ANTSelect
        className={containerClassName}
        style={containerStyle}
        filterOption={(input, option: any) => fullTextSearch(input, option?.children)}
        {...rest}
      />
      {suffix && <div className="custom-select-suffix">{suffix}</div>}
    </div>
  );
};

CustomSelect.Option = Option;
CustomSelect.OptGroup = OptGroup;

export default CustomSelect;
