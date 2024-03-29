import Icon from "@ant-design/icons";

const DownIcon = () => {
  const svg = () => (
    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.3554 10.69L26.642 5.97667C26.017 5.3515 25.1693 5.00019 24.2854 5H12.332C11.448 5 10.6001 5.35119 9.975 5.97631C9.34988 6.60143 8.99869 7.44928 8.99869 8.33333V31.6667C8.99869 32.5507 9.34988 33.3986 9.975 34.0237C10.6001 34.6488 11.448 35 12.332 35H28.9987C29.8827 35 30.7306 34.6488 31.3557 34.0237C31.9808 33.3986 32.332 32.5507 32.332 31.6667V13.0467C32.3318 12.1627 31.9805 11.315 31.3554 10.69Z" fill="#F4600C" stroke="#F4600C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20.1667 28C24.3088 28 27.6667 24.6421 27.6667 20.5C27.6667 16.3579 24.3088 13 20.1667 13C16.0245 13 12.6667 16.3579 12.6667 20.5C12.6667 24.6421 16.0245 28 20.1667 28Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22.6667 19L19.5406 22L17.6667 20.2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );

  return <Icon component={svg} />;
};

export default DownIcon;
