import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCakeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeSharpW700'
      short_name='Cake'

      {...props}
    >
      <path d="M1.4 22.775V13.875H3.4V7.625H10.425V6.75Q9.975 6.4 9.7 5.9Q9.425 5.4 9.425 4.675Q9.425 4.175 9.588 3.737Q9.75 3.3 10.175 2.875L12 1.075L13.825 2.875Q14.25 3.3 14.413 3.737Q14.575 4.175 14.575 4.675Q14.575 5.4 14.3 5.9Q14.025 6.4 13.575 6.75V7.625H20.6V13.875H22.6V22.775ZM6.55 13.625H17.45V10.775H6.55ZM4.55 19.625H19.45V16.775H4.55ZM6.55 13.625H17.45ZM4.55 19.625H19.45ZM20.6 13.625H3.4H20.6Z"/>
    </Icon>
  )
});

export default IconMaterialCakeSharpW700;
