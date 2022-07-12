import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdSharpW700Filled'
      short_name='Sd'

      {...props}
    >
      <path d="M6.15 15H11.15V11.5H7.65V10.5H9.65V11H11.15V9H6.15V12.5H9.65V13.5H7.65V13H6.15ZM12.85 15H16.85Q17.275 15 17.562 14.712Q17.85 14.425 17.85 14V10Q17.85 9.575 17.562 9.287Q17.275 9 16.85 9H12.85ZM14.35 13.5V10.5H16.35Q16.35 10.5 16.35 10.5Q16.35 10.5 16.35 10.5V13.5Q16.35 13.5 16.35 13.5Q16.35 13.5 16.35 13.5ZM1.15 20.85V3.15H22.85V20.85Z"/>
    </Icon>
  )
});

export default IconMaterialSdSharpW700Filled;
