import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddAlertOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAlertOutlinedW700Filled'
      short_name='AddAlert'

      {...props}
    >
      <path d="M10.85 15.15H13.15V13.225H15.075V10.925H13.15V9H10.85V10.925H8.925V13.225H10.85ZM2.575 19.725V16.575H4.85V10.5Q4.85 8.075 6.238 6.162Q7.625 4.25 9.925 3.675V3.125Q9.925 2.25 10.525 1.65Q11.125 1.05 12 1.05Q12.875 1.05 13.475 1.65Q14.075 2.25 14.075 3.125V3.675Q16.4 4.25 17.775 6.162Q19.15 8.075 19.15 10.5V16.575H21.45V19.725ZM12.025 22.85Q11.075 22.85 10.4 22.188Q9.725 21.525 9.725 20.575H14.3Q14.3 21.525 13.638 22.188Q12.975 22.85 12.025 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialAddAlertOutlinedW700Filled;
