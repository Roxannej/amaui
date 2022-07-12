import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletSharpW700'
      short_name='Tablet'

      {...props}
    >
      <path d="M0.225 20.85V3.15H23.775V20.85ZM6.375 17.7H17.625V6.3H6.375ZM3.375 17.7H4.375V6.3H3.375ZM19.625 17.7H20.625V6.3H19.625ZM3.375 6.3H4.375ZM19.625 6.3H20.625Z"/>
    </Icon>
  )
});

export default IconMaterialTabletSharpW700;
