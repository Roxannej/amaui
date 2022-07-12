import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoundedCornerSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundedCornerSharpW700'
      short_name='RoundedCorner'

      {...props}
    >
      <path d="M19.45 22.6V19.45H22.6V22.6ZM19.45 17.45V14.95H22.6V17.45ZM1.4 13.15V10.85H4.55V13.15ZM1.4 17.45V15.15H4.55V17.45ZM1.4 8.85V6.55H4.55V8.85ZM1.4 4.55V1.4H4.55V4.55ZM6.55 4.55V1.4H8.85V4.55ZM15.15 22.6V19.45H17.45V22.6ZM10.85 22.6V19.45H13.15V22.6ZM6.55 22.6V19.45H8.85V22.6ZM1.4 22.6V19.45H4.55V22.6ZM19.45 12.95V4.55H10.85V1.4H22.6V12.95Z"/>
    </Icon>
  )
});

export default IconMaterialRoundedCornerSharpW700;
