import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNfcSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NfcSharpW700Filled'
      short_name='Nfc'

      {...props}
    >
      <path d="M6.625 17.375H17.375V6.625H13Q12.175 6.625 11.588 7.4Q11 8.175 11 9V10.3Q10.5 10.575 10.25 11Q10 11.425 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.425 13.725 11Q13.45 10.575 13 10.3V9H15V15H9V9H10V6.625H6.625ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialNfcSharpW700Filled;
