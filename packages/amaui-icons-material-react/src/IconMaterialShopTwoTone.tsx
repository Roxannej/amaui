import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopTwoTone'
      short_name='Shop'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 19h16V8H4v11zM9 9l7.5 4L9 18V9z" opacity=".3"/><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zm10 15H4V8h16v11zM9 9v9l7.5-5z"/>
    </Icon>
  )
});

export default IconMaterialShopTwoTone;
