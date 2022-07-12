import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinEndSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndSharpW700'
      short_name='PinEnd'

      {...props}
    >
      <path d="M14.075 15.425 11.325 12.65V14.725H8.55V7.925H15.35V10.7H13.25L16.025 13.45ZM19.45 20.875Q18.05 20.875 17.062 19.887Q16.075 18.9 16.075 17.5Q16.075 16.1 17.062 15.113Q18.05 14.125 19.45 14.125Q20.85 14.125 21.85 15.113Q22.85 16.1 22.85 17.5Q22.85 18.9 21.85 19.887Q20.85 20.875 19.45 20.875ZM1.15 20.85V3.15H22.85V12.125H19.7V6.3H4.3V17.7H14.075V20.85Z"/>
    </Icon>
  )
});

export default IconMaterialPinEndSharpW700;
