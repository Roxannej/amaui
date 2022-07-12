import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileOpenOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenOutlined'
      short_name='FileOpen'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14L20 8V14H18V9H13V4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20H15V22ZM21.95 22.375 19 19.425V21.65H17V16H22.65V18H20.4L23.35 20.95ZM6 20V14V9V4Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20Z"/>
    </Icon>
  )
});

export default IconMaterialFileOpenOutlined;
