import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintOutlined'
      short_name='Print'

      {...props}
    >
      <path d="M16 8V5H8V8H6V3H18V8ZM4 10Q4 10 4.287 10Q4.575 10 5 10H19Q19.425 10 19.712 10Q20 10 20 10H18H6ZM18 12.5Q18.425 12.5 18.712 12.212Q19 11.925 19 11.5Q19 11.075 18.712 10.787Q18.425 10.5 18 10.5Q17.575 10.5 17.288 10.787Q17 11.075 17 11.5Q17 11.925 17.288 12.212Q17.575 12.5 18 12.5ZM16 19V15H8V19ZM18 21H6V17H2V11Q2 9.725 2.875 8.863Q3.75 8 5 8H19Q20.275 8 21.138 8.863Q22 9.725 22 11V17H18ZM20 15V11Q20 10.575 19.712 10.287Q19.425 10 19 10H5Q4.575 10 4.287 10.287Q4 10.575 4 11V15H6V13H18V15Z"/>
    </Icon>
  )
});

export default IconMaterialPrintOutlined;
