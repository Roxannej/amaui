import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackpackOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackOutlinedFilled'
      short_name='Backpack'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8Q4 6.6 4.85 5.55Q5.7 4.5 7 4.15V2H10V4H14V2H17V4.15Q18.3 4.5 19.15 5.55Q20 6.6 20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM14.5 16H16.5V12H7.5V14H14.5Z"/>
    </Icon>
  )
});

export default IconMaterialBackpackOutlinedFilled;
