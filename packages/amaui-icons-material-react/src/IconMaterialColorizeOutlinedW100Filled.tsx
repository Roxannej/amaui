import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialColorizeOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeOutlinedW100Filled'
      short_name='Colorize'

      {...props}
    >
      <path d="M4.45 19.7V16.8L13 8.25L11.1 6.4L11.6 5.9L14 8.25L17.5 4.75Q17.65 4.6 17.875 4.6Q18.1 4.6 18.25 4.75L19.4 5.9Q19.55 6.05 19.55 6.275Q19.55 6.5 19.4 6.65L15.85 10.2L18.25 12.6L17.75 13.1L15.85 11.2L7.35 19.7ZM5.15 19H7.1L15.4 10.65L13.5 8.75L5.15 17.05ZM15.4 9.65 18.775 6.275 17.875 5.375 14.5 8.75ZM15.4 9.65 14.5 8.75 17.875 5.375 18.775 6.275Z"/>
    </Icon>
  )
});

export default IconMaterialColorizeOutlinedW100Filled;
