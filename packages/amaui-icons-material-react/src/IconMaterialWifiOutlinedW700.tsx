import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiOutlinedW700'
      short_name='Wifi'

      {...props}
    >
      <path d="M6.875 15.875 4.25 13.25Q5.725 11.775 7.713 10.887Q9.7 10 12 10Q14.3 10 16.288 10.875Q18.275 11.75 19.75 13.25L17.125 15.875Q16.025 14.875 14.763 14.325Q13.5 13.775 12 13.775Q10.5 13.775 9.238 14.325Q7.975 14.875 6.875 15.875ZM2.625 11.625 0 9Q2.3 6.65 5.375 5.325Q8.45 4 12 4Q15.55 4 18.625 5.325Q21.7 6.65 24 9L21.375 11.625Q19.45 9.8 17.125 8.787Q14.8 7.775 12 7.775Q9.2 7.775 6.875 8.787Q4.55 9.8 2.625 11.625ZM12 21 15.525 17.45Q14.85 16.775 13.95 16.387Q13.05 16 12 16Q10.95 16 10.05 16.387Q9.15 16.775 8.475 17.45Z"/>
    </Icon>
  )
});

export default IconMaterialWifiOutlinedW700;