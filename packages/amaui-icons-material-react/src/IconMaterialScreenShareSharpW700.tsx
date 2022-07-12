import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenShareSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareSharpW700'
      short_name='ScreenShare'

      {...props}
    >
      <path d="M7.8 14.2H10.2V11.2H12.8V13.45L16.275 10L12.8 6.55V8.8H7.8ZM1.15 18.85V2.15H22.85V18.85ZM4.3 15.7H19.7V5.3H4.3ZM0.225 22.225V19.85H23.775V22.225ZM4.3 15.7V5.3V15.7Z"/>
    </Icon>
  )
});

export default IconMaterialScreenShareSharpW700;
