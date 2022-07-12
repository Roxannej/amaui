import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAppShortcutOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcutOutlinedFilled'
      short_name='AppShortcut'

      {...props}
    >
      <path d="M21 11 20.375 9.625 19 9 20.375 8.375 21 7 21.625 8.375 23 9 21.625 9.625ZM16 16 14.75 13.25 12 12 14.75 10.75 16 8 17.25 10.75 20 12 17.25 13.25ZM21 17 20.375 15.625 19 15 20.375 14.375 21 13 21.625 14.375 23 15 21.625 15.625ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V7H17V6H7V18H17V17H19V21Q19 21.825 18.413 22.413Q17.825 23 17 23Z"/>
    </Icon>
  )
});

export default IconMaterialAppShortcutOutlinedFilled;