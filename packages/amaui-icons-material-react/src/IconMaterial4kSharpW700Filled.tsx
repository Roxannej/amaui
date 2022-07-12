import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4kSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kSharpW700Filled'
      short_name='4k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13ZM6.7 13.5H9.7V15H11.2V13.5H12.2V12H11.2V9H9.7V12H8.2V9H6.7ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterial4kSharpW700Filled;
