import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessMediumOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessMediumOutlined'
      short_name='BrightnessMedium'

      {...props}
    >
      <path d="M12 23.3 8.65 20H4V15.35L0.7 12L4 8.65V4H8.65L12 0.7L15.35 4H20V8.65L23.3 12L20 15.35V20H15.35ZM12 18Q14.5 18 16.25 16.25Q18 14.5 18 12Q18 9.5 16.25 7.75Q14.5 6 12 6ZM12 20.5 14.5 18H18V14.5L20.5 12L18 9.5V6H14.5L12 3.5L9.5 6H6V9.5L3.5 12L6 14.5V18H9.5ZM12 12Z"/>
    </Icon>
  )
});

export default IconMaterialBrightnessMediumOutlined;
