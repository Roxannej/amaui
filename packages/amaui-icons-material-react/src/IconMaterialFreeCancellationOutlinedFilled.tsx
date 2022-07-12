import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFreeCancellationOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FreeCancellationOutlinedFilled'
      short_name='FreeCancellation'

      {...props}
    >
      <path d="M16.55 22.5 13 18.95 14.4 17.55 16.525 19.675 20.775 15.425 22.175 16.85ZM7.4 17 6 15.6 7.6 14 6 12.4 7.4 11 9 12.6 10.6 11 12 12.4 10.4 14 12 15.6 10.6 17 9 15.4ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2H8V4H16V2H18V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V12.35L19 14.375V10H5V20Q5 20 5 20Q5 20 5 20H11.25L13.225 22Z"/>
    </Icon>
  )
});

export default IconMaterialFreeCancellationOutlinedFilled;
