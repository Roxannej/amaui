import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoupeSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoupeSharpW700Filled'
      short_name='Loupe'

      {...props}
    >
      <path d="M10.625 17.2H13.375V13.375H17.2V10.625H13.375V6.8H10.625V10.625H6.8V13.375H10.625ZM12 22.85Q9.75 22.85 7.775 22Q5.8 21.15 4.325 19.675Q2.85 18.2 2 16.225Q1.15 14.25 1.15 12Q1.15 9.75 2 7.775Q2.85 5.8 4.325 4.325Q5.8 2.85 7.775 2Q9.75 1.15 12 1.15Q14.25 1.15 16.225 2Q18.2 2.85 19.675 4.325Q21.15 5.8 22 7.775Q22.85 9.75 22.85 12V22.85Z"/>
    </Icon>
  )
});

export default IconMaterialLoupeSharpW700Filled;
