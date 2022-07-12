import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTodayOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TodayOutlinedW100'
      short_name='Today'

      {...props}
    >
      <path d="M9 15.35Q8.175 15.35 7.588 14.762Q7 14.175 7 13.35Q7 12.525 7.588 11.938Q8.175 11.35 9 11.35Q9.825 11.35 10.413 11.938Q11 12.525 11 13.35Q11 14.175 10.413 14.762Q9.825 15.35 9 15.35ZM5.8 20.7Q5.15 20.7 4.725 20.275Q4.3 19.85 4.3 19.2V6.8Q4.3 6.15 4.725 5.725Q5.15 5.3 5.8 5.3H7.8V3H8.6V5.3H15.5V3H16.2V5.3H18.2Q18.85 5.3 19.275 5.725Q19.7 6.15 19.7 6.8V19.2Q19.7 19.85 19.275 20.275Q18.85 20.7 18.2 20.7ZM5.8 20H18.2Q18.5 20 18.75 19.75Q19 19.5 19 19.2V10.8H5V19.2Q5 19.5 5.25 19.75Q5.5 20 5.8 20ZM5 10.1H19V6.8Q19 6.5 18.75 6.25Q18.5 6 18.2 6H5.8Q5.5 6 5.25 6.25Q5 6.5 5 6.8ZM5 10.1V6.8Q5 6.45 5 6.225Q5 6 5 6Q5 6 5 6.225Q5 6.45 5 6.8V10.1Z"/>
    </Icon>
  )
});

export default IconMaterialTodayOutlinedW100;
