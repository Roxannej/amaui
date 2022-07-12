import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTapAndPlaySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlaySharpW700Filled'
      short_name='TapAndPlay'

      {...props}
    >
      <path d="M15.625 23.775V20.625H16.625V6.375H7.375V12H4.225V0.225H19.775V23.775ZM4.225 23.775V21.375Q5.2 21.375 5.912 22.087Q6.625 22.8 6.625 23.775ZM8.225 23.775Q8.225 22.125 7.05 20.95Q5.875 19.775 4.225 19.775V17.375Q6.875 17.375 8.75 19.25Q10.625 21.125 10.625 23.775ZM12.225 23.775Q12.225 20.425 9.9 18.1Q7.575 15.775 4.225 15.775V13.375Q6.375 13.375 8.262 14.2Q10.15 15.025 11.562 16.438Q12.975 17.85 13.8 19.738Q14.625 21.625 14.625 23.775Z"/>
    </Icon>
  )
});

export default IconMaterialTapAndPlaySharpW700Filled;
