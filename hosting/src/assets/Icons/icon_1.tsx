import Icon from "@ant-design/icons";

const DownIcon = () => {
  const svg = () => (
    <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.8696 8.20185L23.1346 4.46685C22.6702 4.00183 22.1186 3.63293 21.5115 3.38127C20.9043 3.1296 20.2535 3.0001 19.5963 3.00018H6.66797C5.34189 3.00018 4.07012 3.52697 3.13243 4.46465C2.19475 5.40233 1.66797 6.6741 1.66797 8.00018V28.0002C1.66797 29.3263 2.19475 30.598 3.13243 31.5357C4.07012 32.4734 5.34189 33.0002 6.66797 33.0002H23.3346C24.6607 33.0002 25.9325 32.4734 26.8702 31.5357C27.8079 30.598 28.3346 29.3263 28.3346 28.0002V11.7385C28.3347 11.0817 28.2054 10.4313 27.954 9.82443C27.7026 9.21759 27.3342 8.66623 26.8696 8.20185Z" fill="#F4600C" stroke="#F4600C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M30.0013 12.1668H22.5013C21.6172 12.1668 20.7694 11.8156 20.1443 11.1905C19.5192 10.5654 19.168 9.71755 19.168 8.8335V1.3335" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21.6693 25.5H8.33594" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.33594 19.667H21.6693" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12.8359 13.8335H8.33594" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


  );

  return <Icon component={svg} />;
};

export default DownIcon;
