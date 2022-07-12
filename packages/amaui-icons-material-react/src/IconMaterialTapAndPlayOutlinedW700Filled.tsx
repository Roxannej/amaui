import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTapAndPlayOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayOutlinedW700Filled'
      short_name='TapAndPlay'

      {...props}
    >
      <path d="M4.225 12V3.375Q4.225 2.05 5.138 1.137Q6.05 0.225 7.375 0.225H16.625Q17.95 0.225 18.863 1.137Q19.775 2.05 19.775 3.375V20.625Q19.775 21.95 18.863 22.862Q17.95 23.775 16.625 23.775H15.625V17.625H16.625V6.375H7.375V12ZM4.225 23.775V21.375Q5.2 21.375 5.912 22.087Q6.625 22.8 6.625 23.775ZM8.225 23.775Q8.225 22.125 7.05 20.95Q5.875 19.775 4.225 19.775V17.375Q6.875 17.375 8.75 19.25Q10.625 21.125 10.625 23.775ZM12.225 23.775Q12.225 20.425 9.9 18.1Q7.575 15.775 4.225 15.775V13.375Q6.375 13.375 8.262 14.2Q10.15 15.025 11.562 16.438Q12.975 17.85 13.8 19.738Q14.625 21.625 14.625 23.775Z"/>
    </Icon>
  )
});

export default IconMaterialTapAndPlayOutlinedW700Filled;