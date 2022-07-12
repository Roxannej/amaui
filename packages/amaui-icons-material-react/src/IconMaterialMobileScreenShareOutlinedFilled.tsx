import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileScreenShareOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreenShareOutlinedFilled'
      short_name='MobileScreenShare'

      {...props}
    >
      <path d="M9 15V13.5Q9 12.25 9.875 11.375Q10.75 10.5 12 10.5H13V8.5L16 11.5L13 14.5V12.5H12Q11.575 12.5 11.288 12.787Q11 13.075 11 13.5V15ZM7 18H17V6H7ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23Z"/>
    </Icon>
  )
});

export default IconMaterialMobileScreenShareOutlinedFilled;