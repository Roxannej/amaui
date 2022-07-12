import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOutlined'
      short_name='Edit'

      {...props}
    >
      <path d="M5 19H6.4L16.45 8.975L15.75 8.25L15.025 7.55L5 17.6ZM3 21V16.75L16.45 3.325Q17.025 2.75 17.863 2.75Q18.7 2.75 19.275 3.325L20.675 4.75Q21.25 5.325 21.25 6.15Q21.25 6.975 20.675 7.55L7.25 21ZM19.25 6.15 17.85 4.75ZM16.45 8.975 15.75 8.25 15.025 7.55 16.45 8.975Z"/>
    </Icon>
  )
});

export default IconMaterialEditOutlined;
