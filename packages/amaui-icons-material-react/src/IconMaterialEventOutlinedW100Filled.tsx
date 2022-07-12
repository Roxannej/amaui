import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventOutlinedW100Filled'
      short_name='Event'

      {...props}
    >
      <path d="M15 18Q14.175 18 13.588 17.413Q13 16.825 13 16Q13 15.175 13.588 14.587Q14.175 14 15 14Q15.825 14 16.413 14.587Q17 15.175 17 16Q17 16.825 16.413 17.413Q15.825 18 15 18ZM5.8 20.7Q5.15 20.7 4.725 20.275Q4.3 19.85 4.3 19.2V6.8Q4.3 6.15 4.725 5.725Q5.15 5.3 5.8 5.3H7.8V3H8.6V5.3H15.5V3H16.2V5.3H18.2Q18.85 5.3 19.275 5.725Q19.7 6.15 19.7 6.8V19.2Q19.7 19.85 19.275 20.275Q18.85 20.7 18.2 20.7ZM5.8 20H18.2Q18.5 20 18.75 19.75Q19 19.5 19 19.2V10.8H5V19.2Q5 19.5 5.25 19.75Q5.5 20 5.8 20Z"/>
    </Icon>
  )
});

export default IconMaterialEventOutlinedW100Filled;