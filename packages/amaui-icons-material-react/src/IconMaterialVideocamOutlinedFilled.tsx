import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOutlinedFilled'
      short_name='Videocam'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L22 6.5V17.5L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20Z"/>
    </Icon>
  )
});

export default IconMaterialVideocamOutlinedFilled;
