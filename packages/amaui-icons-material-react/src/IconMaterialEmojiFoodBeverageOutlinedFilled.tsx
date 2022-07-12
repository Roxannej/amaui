import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFoodBeverageOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageOutlinedFilled'
      short_name='EmojiFoodBeverage'

      {...props}
    >
      <path d="M4 21V19H20V21ZM8 17Q6.35 17 5.175 15.825Q4 14.65 4 13V3H9V5.4L7.2 6.85Q7.15 6.9 7 7.25V11.5Q7 11.7 7.15 11.85Q7.3 12 7.5 12H11.5Q11.7 12 11.85 11.85Q12 11.7 12 11.5V7.25Q12 7.2 11.8 6.85L10 5.4V3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V8Q22 8.825 21.413 9.412Q20.825 10 20 10H18V13Q18 14.65 16.825 15.825Q15.65 17 14 17ZM18 8H20Q20 8 20 8Q20 8 20 8V5Q20 5 20 5Q20 5 20 5H18Z"/>
    </Icon>
  )
});

export default IconMaterialEmojiFoodBeverageOutlinedFilled;