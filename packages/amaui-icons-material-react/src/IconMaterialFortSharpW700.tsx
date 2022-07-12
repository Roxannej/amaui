import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFortSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortSharpW700'
      short_name='Fort'

      {...props}
    >
      <path d="M0.05 22.15V16.375L2.05 14.375V8.65L0.05 6.65V1.85H2.8V3.85H4.425V1.85H7.2V3.85H8.8V1.85H11.575V6.65L9.4 8.825V9.625H14.425V8.65L12.425 6.65V1.85H15.2V3.85H16.8V1.85H19.575V3.85H21.2V1.85H23.95V6.65L21.95 8.65V14.375L23.95 16.375V22.15H13.425V16.775H10.575V22.15ZM3.2 19H7.425V13.625H16.575V19H20.8V17.675L18.8 15.675V7.75L19.95 6.625H16.45L17.575 7.75V12.375H6.425V7.75L7.55 6.625H4.05L5.2 7.75V15.675L3.2 17.675ZM12 12.8Z"/>
    </Icon>
  )
});

export default IconMaterialFortSharpW700;
