import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdOutlinedW700Filled'
      short_name='Hd'

      {...props}
    >
      <path d="M6.15 15H7.65V13H9.65V15H11.15V9H9.65V11.5H7.65V9H6.15ZM12.85 15H16.85Q17.275 15 17.562 14.712Q17.85 14.425 17.85 14V10Q17.85 9.575 17.562 9.287Q17.275 9 16.85 9H12.85ZM14.35 13.5V10.5H16.35Q16.35 10.5 16.35 10.5Q16.35 10.5 16.35 10.5V13.5Q16.35 13.5 16.35 13.5Q16.35 13.5 16.35 13.5ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialHdOutlinedW700Filled;
