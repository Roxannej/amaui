import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrunchDiningOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrunchDiningOutlinedFilled'
      short_name='BrunchDining'

      {...props}
    >
      <path d="M2.5 22Q2.275 22 2.138 21.863Q2 21.725 2 21.5V20H16V21.5Q16 21.725 15.863 21.863Q15.725 22 15.5 22ZM2 18V16.5Q2 16.275 2.138 16.137Q2.275 16 2.5 16H7V14H11V16H15.5Q15.725 16 15.863 16.137Q16 16.275 16 16.5V18ZM18 22V15.9Q17.1 14.875 16.55 13.875Q16 12.875 16 11.45V2H22V11.45Q22 12.875 21.462 13.887Q20.925 14.9 20 15.9V20H22V22ZM18 8H20V4H18Z"/>
    </Icon>
  )
});

export default IconMaterialBrunchDiningOutlinedFilled;