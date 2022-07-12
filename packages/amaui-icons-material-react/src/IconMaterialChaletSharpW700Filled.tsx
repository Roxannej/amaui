import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChaletSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChaletSharpW700Filled'
      short_name='Chalet'

      {...props}
    >
      <path d="M17.5 11.55V10.175L16.725 10.95L15.775 10L17.5 8.275V7.5H16.725L15 9.225L14.05 8.275L14.825 7.5H13.45V6.125H14.825L14.05 5.35L15 4.375L16.725 6.1H17.5V5.35L15.775 3.625L16.725 2.675L17.5 3.425V2.05H18.875V3.425L19.65 2.675L20.6 3.625L18.875 5.35V6.125H19.65L21.375 4.4L22.325 5.35L21.575 6.125H22.95V7.5H21.575L22.325 8.275L21.375 9.225L19.65 7.5H18.875V8.275L20.6 10L19.65 10.95L18.875 10.175V11.55ZM4.425 20.575V16.225L3.525 17.125L1.575 15.2L10 6.775L18.425 15.2L16.475 17.15L15.575 16.25V20.575H11.375V14.8H8.625V20.575Z"/>
    </Icon>
  )
});

export default IconMaterialChaletSharpW700Filled;