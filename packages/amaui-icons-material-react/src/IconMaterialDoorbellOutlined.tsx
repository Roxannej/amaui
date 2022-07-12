import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorbellOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellOutlined'
      short_name='Doorbell'

      {...props}
    >
      <path d="M12 17.5Q12.425 17.5 12.713 17.212Q13 16.925 13 16.5H11Q11 16.925 11.288 17.212Q11.575 17.5 12 17.5ZM8 16H16V15H15V12.65Q15 11.55 14.4 10.65Q13.8 9.75 12.75 9.5V9.25Q12.75 8.925 12.538 8.712Q12.325 8.5 12 8.5Q11.675 8.5 11.463 8.712Q11.25 8.925 11.25 9.25V9.5Q10.2 9.75 9.6 10.65Q9 11.55 9 12.65V15H8ZM4 21V9L12 3L20 9V21ZM6 19H18V10L12 5.5L6 10ZM12 12.25Z"/>
    </Icon>
  )
});

export default IconMaterialDoorbellOutlined;
