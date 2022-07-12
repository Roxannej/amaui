import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial8kSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kSharpW700'
      short_name='8k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18.025L15.75 12L18.025 9H16.25L14.5 11.25V9H13ZM6.725 15H11.225V9H6.725ZM8.225 11.5V10H9.725V11.5ZM8.225 14V12.5H9.725V14ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterial8kSharpW700;
