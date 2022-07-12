import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatReclineNormalOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineNormalOutlined'
      short_name='AirlineSeatReclineNormal'

      {...props}
    >
      <path d="M15 20H8Q7.175 20 6.588 19.413Q6 18.825 6 18V7H8V18Q8 18 8 18Q8 18 8 18H15ZM11.5 6Q10.675 6 10.088 5.412Q9.5 4.825 9.5 4Q9.5 3.175 10.088 2.587Q10.675 2 11.5 2Q12.325 2 12.913 2.587Q13.5 3.175 13.5 4Q13.5 4.825 12.913 5.412Q12.325 6 11.5 6ZM16 22V17H11Q10.175 17 9.588 16.413Q9 15.825 9 15V9.5Q9 8.45 9.725 7.725Q10.45 7 11.5 7Q12.55 7 13.275 7.725Q14 8.45 14 9.5V14H16Q16.825 14 17.413 14.587Q18 15.175 18 16V22Z"/>
    </Icon>
  )
});

export default IconMaterialAirlineSeatReclineNormalOutlined;
