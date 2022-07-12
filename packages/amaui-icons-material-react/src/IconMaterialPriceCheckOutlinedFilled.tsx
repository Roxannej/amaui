import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceCheckOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheckOutlinedFilled'
      short_name='PriceCheck'

      {...props}
    >
      <path d="M6.5 14.975V13.975H4V11.975H9V9.975H5Q4.575 9.975 4.287 9.688Q4 9.4 4 8.975V4.975Q4 4.55 4.287 4.262Q4.575 3.975 5 3.975H6.5V2.975H8.5V3.975H11V5.975H6V7.975H10Q10.425 7.975 10.713 8.262Q11 8.55 11 8.975V12.975Q11 13.4 10.713 13.688Q10.425 13.975 10 13.975H8.5V14.975ZM13.95 20.975 9.7 16.725 11.1 15.325 13.95 18.175 19.6 12.525 21 13.925Z"/>
    </Icon>
  )
});

export default IconMaterialPriceCheckOutlinedFilled;
