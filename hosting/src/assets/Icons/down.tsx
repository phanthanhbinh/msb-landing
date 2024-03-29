import Icon from "@ant-design/icons";

const DownIcon = () => {
  const svg = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.62284 5.62288C3.83112 5.4146 4.16881 5.4146 4.37709 5.62288L7.99996 9.24576L11.6228 5.62288C11.8311 5.4146 12.1688 5.4146 12.3771 5.62288C12.5854 5.83116 12.5854 6.16885 12.3771 6.37713L8.37709 10.3771C8.16881 10.5854 7.83112 10.5854 7.62284 10.3771L3.62284 6.37713C3.41456 6.16885 3.41456 5.83116 3.62284 5.62288Z" fill="#667085" />
    </svg>

  );

  return <Icon component={svg} />;
};

export default DownIcon;
