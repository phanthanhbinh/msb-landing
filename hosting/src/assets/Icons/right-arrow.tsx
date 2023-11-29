import Icon from "@ant-design/icons";
import React from "react";

const DownIcon = () => {
  const svg = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3619 4.52861C10.6223 4.26826 11.0444 4.26826 11.3047 4.52861L16.3047 9.52861C16.5651 9.78896 16.5651 10.2111 16.3047 10.4714L11.3047 15.4714C11.0444 15.7318 10.6223 15.7318 10.3619 15.4714C10.1016 15.2111 10.1016 14.789 10.3619 14.5286L14.2239 10.6667H4.16667C3.79848 10.6667 3.5 10.3682 3.5 10C3.5 9.63182 3.79848 9.33334 4.16667 9.33334H14.2239L10.3619 5.47141C10.1016 5.21107 10.1016 4.78896 10.3619 4.52861Z" fill="#F4600C" />
    </svg>

  );

  return <Icon component={svg} />;
};

export default DownIcon;
