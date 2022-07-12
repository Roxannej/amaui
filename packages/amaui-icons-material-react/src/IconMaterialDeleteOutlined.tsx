import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteOutlined'
      short_name='Delete'

      {...props}
    >
      <path d="M8 19H16Q16 19 16 19Q16 19 16 19V9H8V19Q8 19 8 19Q8 19 8 19ZM5 6V4H8.5L9.5 3H14.5L15.5 4H19V6ZM8 21Q7.175 21 6.588 20.413Q6 19.825 6 19V7H18V19Q18 19.825 17.413 20.413Q16.825 21 16 21ZM8 19H16Q16 19 16 19Q16 19 16 19H8Q8 19 8 19Q8 19 8 19Z"/>
    </Icon>
  )
});

export default IconMaterialDeleteOutlined;
