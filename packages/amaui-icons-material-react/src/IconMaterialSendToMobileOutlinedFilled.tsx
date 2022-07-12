import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendToMobileOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileOutlinedFilled'
      short_name='SendToMobile'

      {...props}
    >
      <path d="M17 16 15.6 14.6 17.15 13H12V11H17.15L15.6 9.4L17 8L21 12ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V7H17V6H7V18H17V17H19V21Q19 21.825 18.413 22.413Q17.825 23 17 23Z"/>
    </Icon>
  )
});

export default IconMaterialSendToMobileOutlinedFilled;