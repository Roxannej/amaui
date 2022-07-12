import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSellRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SellRoundedW700'
      short_name='Sell'

      {...props}
    >
      <path d="M12.85 23.15Q12.2 23.15 11.625 22.9Q11.05 22.65 10.6 22.2L1.8 13.4Q1.35 12.95 1.1 12.375Q0.85 11.8 0.85 11.15V4Q0.85 2.7 1.775 1.775Q2.7 0.85 4 0.85H11.15Q11.8 0.85 12.375 1.1Q12.95 1.35 13.4 1.8L22.2 10.6Q23.125 11.525 23.125 12.825Q23.125 14.125 22.2 15.05L15.05 22.2Q14.625 22.625 14.05 22.887Q13.475 23.15 12.85 23.15ZM12.85 20 20 12.85 11.15 4H4V11.15ZM6.5 8Q7.125 8 7.562 7.562Q8 7.125 8 6.5Q8 5.875 7.562 5.438Q7.125 5 6.5 5Q5.875 5 5.438 5.438Q5 5.875 5 6.5Q5 7.125 5.438 7.562Q5.875 8 6.5 8ZM4 4Z"/>
    </Icon>
  )
});

export default IconMaterialSellRoundedW700;
