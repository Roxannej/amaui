import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPausePresentationSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationSharpW700'
      short_name='PausePresentation'

      {...props}
    >
      <path d="M8.625 16.2H11V7.8H8.625ZM13 16.2H15.375V7.8H13ZM1.15 20.85V3.15H22.85V20.85ZM4.3 17.7H19.7V6.3H4.3ZM4.3 17.7V6.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialPausePresentationSharpW700;