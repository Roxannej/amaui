import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileFriendlyOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyOutlinedW100Filled'
      short_name='MobileFriendly'

      {...props}
    >
      <path d="M14.95 15.1 11.6 11.75 12.1 11.25 14.95 14.1 20.65 8.4 21.15 8.9ZM6.8 21.7Q6.175 21.7 5.738 21.262Q5.3 20.825 5.3 20.2V3.8Q5.3 3.175 5.738 2.737Q6.175 2.3 6.8 2.3H15.2Q15.825 2.3 16.262 2.737Q16.7 3.175 16.7 3.8V6.9H16V5.35H6V18.65H16V17.1H16.7V20.2Q16.7 20.825 16.262 21.262Q15.825 21.7 15.2 21.7Z"/>
    </Icon>
  )
});

export default IconMaterialMobileFriendlyOutlinedW100Filled;
