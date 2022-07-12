import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHevcOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HevcOutlined'
      short_name='Hevc'

      {...props}
    >
      <path d="M3 15V9H4.5V11H5.5V9H7V15H5.5V12.5H4.5V15ZM18 15Q17.575 15 17.288 14.712Q17 14.425 17 14V10Q17 9.575 17.288 9.287Q17.575 9 18 9H20Q20.425 9 20.712 9.287Q21 9.575 21 10V11H19.5V10.5H18.5V13.5H19.5V13H21V14Q21 14.425 20.712 14.712Q20.425 15 20 15ZM13 15 12 9H13.5L14.25 13.5L15 9H16.5L15.5 15ZM8 15V9H11.5V10.5H9.5V11H11.5V12.5H9.5V13.5H11.5V15Z"/>
    </Icon>
  )
});

export default IconMaterialHevcOutlined;
