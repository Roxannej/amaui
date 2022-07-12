import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackpackOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackOutlined'
      short_name='Backpack'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8Q4 6.6 4.85 5.55Q5.7 4.5 7 4.15V2H10V4H14V2H17V4.15Q18.3 4.5 19.15 5.55Q20 6.6 20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V8Q18 7.175 17.413 6.588Q16.825 6 16 6H8Q7.175 6 6.588 6.588Q6 7.175 6 8V20Q6 20 6 20Q6 20 6 20ZM14.5 16H16.5V12H7.5V14H14.5ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Z"/>
    </Icon>
  )
});

export default IconMaterialBackpackOutlined;