import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenLockPortraitSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockPortraitSharpW700'
      short_name='ScreenLockPortrait'

      {...props}
    >
      <path d="M9 16V11H10V10Q10 9.175 10.588 8.587Q11.175 8 12 8Q12.825 8 13.413 8.587Q14 9.175 14 10V11H15V16ZM11 11H13V10Q13 9.575 12.713 9.287Q12.425 9 12 9Q11.575 9 11.288 9.287Q11 9.575 11 10ZM4.225 23.775V0.225H19.775V23.775ZM7.375 17.625H16.625V6.375H7.375ZM7.375 20.625H16.625V19.625H7.375ZM7.375 4.375H16.625V3.375H7.375ZM7.375 4.375V3.375V4.375ZM7.375 20.625V19.625V20.625Z"/>
    </Icon>
  )
});

export default IconMaterialScreenLockPortraitSharpW700;
