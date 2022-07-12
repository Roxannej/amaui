import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffOutlined'
      short_name='VideocamOff'

      {...props}
    >
      <path d="M22 17.5 18 13.5V15.175L16 13.175V6Q16 6 16 6Q16 6 16 6H8.825L6.825 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L22 6.5ZM20.55 23.35 16.95 19.75Q16.725 19.875 16.5 19.938Q16.275 20 16 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.725 2.062 5.5Q2.125 5.275 2.25 5.05L0.65 3.45L2.05 2.05L21.95 21.95ZM4 18H15.15Q15.15 18 15.15 18Q15.15 18 15.15 18L4 6.85Q4 6.85 4 6.85Q4 6.85 4 6.85V18Q4 18 4 18Q4 18 4 18ZM12.45 9.625Q12.45 9.625 12.45 9.625Q12.45 9.625 12.45 9.625ZM9.55 12.4Q9.55 12.4 9.55 12.4Q9.55 12.4 9.55 12.4Q9.55 12.4 9.55 12.4Q9.55 12.4 9.55 12.4Q9.55 12.4 9.55 12.4Q9.55 12.4 9.55 12.4Z"/>
    </Icon>
  )
});

export default IconMaterialVideocamOffOutlined;
