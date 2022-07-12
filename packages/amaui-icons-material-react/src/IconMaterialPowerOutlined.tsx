import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOutlined'
      short_name='Power'

      {...props}
    >
      <path d="M11.5 19H12.5V17.15L16 13.65V9Q16 9 16 9Q16 9 16 9H8Q8 9 8 9Q8 9 8 9V13.65L11.5 17.15ZM9.5 21V18L6 14.5V9Q6 8.175 6.588 7.587Q7.175 7 8 7V3H10V7H14V3H16V7Q16.825 7 17.413 7.587Q18 8.175 18 9V14.5L14.5 18V21ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  )
});

export default IconMaterialPowerOutlined;