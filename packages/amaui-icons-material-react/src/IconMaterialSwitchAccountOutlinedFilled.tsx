import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchAccountOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountOutlinedFilled'
      short_name='SwitchAccount'

      {...props}
    >
      <path d="M14 11Q15.25 11 16.125 10.125Q17 9.25 17 8Q17 6.75 16.125 5.875Q15.25 5 14 5Q12.75 5 11.875 5.875Q11 6.75 11 8Q11 9.25 11.875 10.125Q12.75 11 14 11ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22ZM8 16H20Q18.9 14.525 17.35 13.762Q15.8 13 14 13Q12.2 13 10.65 13.762Q9.1 14.525 8 16Z"/>
    </Icon>
  )
});

export default IconMaterialSwitchAccountOutlinedFilled;
