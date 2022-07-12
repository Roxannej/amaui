import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFiberNewOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberNewOutlinedFilled'
      short_name='FiberNew'

      {...props}
    >
      <path d="M3.5 15H4.75V11.5L7.3 15H8.5V9H7.25V12.5L4.75 9H3.5ZM9.5 15H13.5V13.75H11V12.65H13.5V11.4H11V10.25H13.5V9H9.5ZM15.5 15H19.5Q19.925 15 20.212 14.712Q20.5 14.425 20.5 14V9H19.25V13.5H18.15V10H16.9V13.5H15.75V9H14.5V14Q14.5 14.425 14.788 14.712Q15.075 15 15.5 15ZM3 20Q2.175 20 1.588 19.413Q1 18.825 1 18V6Q1 5.175 1.588 4.588Q2.175 4 3 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V18Q23 18.825 22.413 19.413Q21.825 20 21 20Z"/>
    </Icon>
  )
});

export default IconMaterialFiberNewOutlinedFilled;
