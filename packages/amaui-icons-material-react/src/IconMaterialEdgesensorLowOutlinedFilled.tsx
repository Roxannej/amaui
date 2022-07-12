import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEdgesensorLowOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowOutlinedFilled'
      short_name='EdgesensorLow'

      {...props}
    >
      <path d="M8 22Q7.175 22 6.588 21.413Q6 20.825 6 20V4Q6 3.175 6.588 2.587Q7.175 2 8 2H16Q16.825 2 17.413 2.587Q18 3.175 18 4V20Q18 20.825 17.413 21.413Q16.825 22 16 22ZM16 7H8V17H16ZM2 14V7H4V14ZM20 17V10H22V17Z"/>
    </Icon>
  )
});

export default IconMaterialEdgesensorLowOutlinedFilled;
