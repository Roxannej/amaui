import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceCheckOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheckOutlinedW700'
      short_name='PriceCheck'

      {...props}
    >
      <path d="M5.725 15.375V14H3.225V11.225H8.225V10H4.625Q4.05 10 3.638 9.587Q3.225 9.175 3.225 8.6V4.6Q3.225 4.025 3.638 3.625Q4.05 3.225 4.625 3.225H5.725V1.85H8.5V3.225H11V6H6V7.225H9.625Q10.2 7.225 10.6 7.625Q11 8.025 11 8.6V12.6Q11 13.175 10.6 13.587Q10.2 14 9.625 14H8.5V15.375ZM14.325 21.925 9.7 17.275 11.8 15.2 14.325 17.725 19.675 12.4 21.775 14.475Z"/>
    </Icon>
  )
});

export default IconMaterialPriceCheckOutlinedW700;
