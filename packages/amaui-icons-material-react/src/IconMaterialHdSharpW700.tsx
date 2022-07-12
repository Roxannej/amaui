import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdSharpW700'
      short_name='Hd'

      {...props}
    >
      <path d="M6.15 15H7.65V13H9.65V15H11.15V9H9.65V11.5H7.65V9H6.15ZM12.85 15H16.85Q17.275 15 17.562 14.712Q17.85 14.425 17.85 14V10Q17.85 9.575 17.562 9.287Q17.275 9 16.85 9H12.85ZM14.35 13.5V10.5H16.35Q16.35 10.5 16.35 10.5Q16.35 10.5 16.35 10.5V13.5Q16.35 13.5 16.35 13.5Q16.35 13.5 16.35 13.5ZM1.15 20.85V3.15H22.85V20.85ZM4.3 17.7H19.7V6.3H4.3ZM4.3 17.7V6.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialHdSharpW700;
