import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialColorizeOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeOutlined'
      short_name='Colorize'

      {...props}
    >
      <path d="M3 21V16.25L11.95 7.3L10.5 5.9L11.95 4.5L13.85 6.4L16.95 3.3Q17.225 3.025 17.65 3.025Q18.075 3.025 18.35 3.3L20.7 5.65Q20.975 5.925 20.975 6.35Q20.975 6.775 20.7 7.05L17.625 10.125L19.525 12.075L18.1 13.5L16.7 12.05L7.75 21ZM5 19H6.95L15.25 10.65L13.35 8.75L5 17.05ZM16.175 8.75 18.575 6.35 17.65 5.425 15.25 7.825ZM16.175 8.75 15.25 7.825 16.175 8.75Z"/>
    </Icon>
  )
});

export default IconMaterialColorizeOutlined;
