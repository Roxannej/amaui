import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPasswordSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasswordSharpW700'
      short_name='Password'

      {...props}
    >
      <path d="M1.425 19.575V16.425H22.575V19.575ZM2.85 13.225 1.2 12.275 1.975 10.9H0.425V9H1.975L1.2 7.675L2.85 6.725L3.625 8.075L4.4 6.725L6.025 7.675L5.25 9H6.8V10.9H5.25L6.025 12.275L4.4 13.225L3.625 11.825ZM11.225 13.225 9.575 12.275 10.35 10.9H8.8V9H10.35L9.575 7.675L11.225 6.725L12 8.075L12.775 6.725L14.425 7.675L13.65 9H15.2V10.9H13.65L14.425 12.275L12.775 13.225L12 11.825ZM19.6 13.225 17.975 12.275 18.75 10.9H17.2V9H18.75L17.975 7.675L19.6 6.725L20.375 8.075L21.15 6.725L22.8 7.675L22.025 9H23.575V10.9H22.025L22.8 12.275L21.15 13.225L20.375 11.825Z"/>
    </Icon>
  )
});

export default IconMaterialPasswordSharpW700;
