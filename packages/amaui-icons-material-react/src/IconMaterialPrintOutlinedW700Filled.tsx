import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintOutlinedW700Filled'
      short_name='Print'

      {...props}
    >
      <path d="M5.15 6.15V2.15H18.85V6.15ZM17.45 13.575Q18.025 13.575 18.425 13.175Q18.825 12.775 18.825 12.2Q18.825 11.625 18.425 11.212Q18.025 10.8 17.45 10.8Q16.875 10.8 16.462 11.212Q16.05 11.625 16.05 12.2Q16.05 12.775 16.462 13.175Q16.875 13.575 17.45 13.575ZM8.3 19.3H15.7V17.225H8.3ZM5.15 22.275V17.7H1.15V11Q1.15 9.4 2.25 8.275Q3.35 7.15 4.925 7.15H19.075Q20.675 7.15 21.763 8.275Q22.85 9.4 22.85 11V17.7H18.85V22.275Z"/>
    </Icon>
  )
});

export default IconMaterialPrintOutlinedW700Filled;