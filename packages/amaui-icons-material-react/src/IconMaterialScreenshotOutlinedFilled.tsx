import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenshotOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotOutlinedFilled'
      short_name='Screenshot'

      {...props}
    >
      <path d="M8 11V7H12V8.5H9.5V11ZM12 17V15.5H14.5V13H16V17ZM7 18H17V6H7ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23Z"/>
    </Icon>
  )
});

export default IconMaterialScreenshotOutlinedFilled;
