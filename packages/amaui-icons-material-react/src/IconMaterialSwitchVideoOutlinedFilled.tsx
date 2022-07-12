import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchVideoOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideoOutlinedFilled'
      short_name='SwitchVideo'

      {...props}
    >
      <path d="M7.5 15.5 8.9 14.1 7.8 13H12.2L11.1 14.1L12.5 15.5L16 12L12.5 8.5L11.1 9.9L12.2 11H7.8L8.9 9.9L7.5 8.5L4 12ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L22 6.5V17.5L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20Z"/>
    </Icon>
  )
});

export default IconMaterialSwitchVideoOutlinedFilled;
