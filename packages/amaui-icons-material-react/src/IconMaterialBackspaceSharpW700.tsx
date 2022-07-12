import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackspaceSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceSharpW700'
      short_name='Backspace'

      {...props}
    >
      <path d="M11.5 16.35 14.025 13.825 16.55 16.35 18.375 14.525 15.85 12 18.375 9.475 16.55 7.65 14.025 10.175 11.5 7.65 9.675 9.475 12.2 12 9.675 14.525ZM7.625 19.85 2.05 12 7.625 4.15H21.95V19.85ZM9.25 16.7H18.8V7.3H9.25L5.925 12ZM18.8 16.7V12V7.3Z"/>
    </Icon>
  )
});

export default IconMaterialBackspaceSharpW700;
