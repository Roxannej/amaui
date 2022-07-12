import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCakeSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeSharpW700Filled'
      short_name='Cake'

      {...props}
    >
      <path d="M3.4 13.375V7.625H10.425V6.75Q9.975 6.4 9.7 5.9Q9.425 5.4 9.425 4.675Q9.425 4.175 9.588 3.737Q9.75 3.3 10.175 2.875L12 1.075L13.825 2.875Q14.25 3.3 14.413 3.737Q14.575 4.175 14.575 4.675Q14.575 5.4 14.3 5.9Q14.025 6.4 13.575 6.75V7.625H20.6V13.375ZM1.4 22.775V15.375H22.6V22.775Z"/>
    </Icon>
  )
});

export default IconMaterialCakeSharpW700Filled;
