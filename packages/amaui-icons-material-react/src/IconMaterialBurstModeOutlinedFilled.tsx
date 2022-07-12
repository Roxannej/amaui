import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBurstModeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstModeOutlinedFilled'
      short_name='BurstMode'

      {...props}
    >
      <path d="M5 19V5H7V19ZM1 19V5H3V19ZM11 19Q10.175 19 9.588 18.413Q9 17.825 9 17V7Q9 6.175 9.588 5.588Q10.175 5 11 5H21Q21.825 5 22.413 5.588Q23 6.175 23 7V17Q23 17.825 22.413 18.413Q21.825 19 21 19ZM12 15H20L17.4 11.5L15.5 14L14.1 12.15Z"/>
    </Icon>
  )
});

export default IconMaterialBurstModeOutlinedFilled;
