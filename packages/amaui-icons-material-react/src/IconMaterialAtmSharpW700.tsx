import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAtmSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtmSharpW700'
      short_name='Atm'

      {...props}
    >
      <path d="M9.7 15.2V10.7H7.825V8.8H13.45V10.7H11.575V15.2ZM1.425 15.2V8.8H6.8V15.2H4.925V13.7H3.3V15.2ZM3.3 11.8H4.925V10.7H3.3ZM14.55 15.2V8.8H22.575V15.2H20.7V10.7H19.5V14.2H17.625V10.7H16.425V15.2Z"/>
    </Icon>
  )
});

export default IconMaterialAtmSharpW700;
