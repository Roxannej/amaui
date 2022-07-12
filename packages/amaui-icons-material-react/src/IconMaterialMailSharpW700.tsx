import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailSharpW700'
      short_name='Mail'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM12 14.075 4.3 9.075V17.7H19.7V9.075ZM12 11.3 19.7 6.3H4.3ZM4.3 9.075V6.3V9.075Z"/>
    </Icon>
  )
});

export default IconMaterialMailSharpW700;