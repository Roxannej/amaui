import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageOutlinedW700Filled'
      short_name='Image'

      {...props}
    >
      <path d="M5.575 17.3H18.425L14.25 11.5L11.25 15.5L9 12.5ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialImageOutlinedW700Filled;
