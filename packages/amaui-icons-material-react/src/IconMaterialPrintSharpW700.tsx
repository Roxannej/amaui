import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintSharpW700'
      short_name='Print'

      {...props}
    >
      <path d="M15.7 7.15V5.3H8.3V7.15H5.15V2.15H18.85V7.15ZM17.45 13.575Q18.025 13.575 18.425 13.175Q18.825 12.775 18.825 12.2Q18.825 11.625 18.425 11.212Q18.025 10.8 17.45 10.8Q16.875 10.8 16.462 11.212Q16.05 11.625 16.05 12.2Q16.05 12.775 16.462 13.175Q16.875 13.575 17.45 13.575ZM15.7 19.3V17.225H8.3V19.3ZM18.85 22.275H5.15V17.7H1.15V7.15H22.85V17.7H18.85ZM19.7 14.55V10.3H4.3V14.55H5.15V14.075H18.85V14.55ZM4.3 10.3H19.7H18.85H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialPrintSharpW700;
