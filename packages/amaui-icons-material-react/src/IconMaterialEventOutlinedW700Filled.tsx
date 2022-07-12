import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventOutlinedW700Filled'
      short_name='Event'

      {...props}
    >
      <path d="M14.5 18Q13.45 18 12.725 17.275Q12 16.55 12 15.5Q12 14.45 12.725 13.725Q13.45 13 14.5 13Q15.55 13 16.275 13.725Q17 14.45 17 15.5Q17 16.55 16.275 17.275Q15.55 18 14.5 18ZM5.3 22.85Q3.975 22.85 3.062 21.938Q2.15 21.025 2.15 19.7V6.3Q2.15 4.975 3.062 4.062Q3.975 3.15 5.3 3.15H6V1.15H8.575V3.15H15.425V1.15H18V3.15H18.7Q20.025 3.15 20.938 4.062Q21.85 4.975 21.85 6.3V19.7Q21.85 21.025 20.938 21.938Q20.025 22.85 18.7 22.85ZM5.3 19.7H18.7Q18.7 19.7 18.7 19.7Q18.7 19.7 18.7 19.7V10H5.3V19.7Q5.3 19.7 5.3 19.7Q5.3 19.7 5.3 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialEventOutlinedW700Filled;