import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackpackOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackOutlinedW100Filled'
      short_name='Backpack'

      {...props}
    >
      <path d="M6.8 20.85Q6.175 20.85 5.738 20.413Q5.3 19.975 5.3 19.35V8Q5.3 6.725 6.15 5.762Q7 4.8 8.3 4.65V2.65H10V4.65H14V2.65H15.7V4.65Q17 4.8 17.85 5.762Q18.7 6.725 18.7 8V19.35Q18.7 19.975 18.262 20.413Q17.825 20.85 17.2 20.85ZM15.3 15.35H16V12.65H8V13.35H15.3Z"/>
    </Icon>
  )
});

export default IconMaterialBackpackOutlinedW100Filled;
