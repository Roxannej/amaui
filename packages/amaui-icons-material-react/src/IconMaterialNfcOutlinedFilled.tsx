import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNfcOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NfcOutlinedFilled'
      short_name='Nfc'

      {...props}
    >
      <path d="M7 17H17V7H13Q12.175 7 11.588 7.587Q11 8.175 11 9V10.3Q10.5 10.575 10.25 11Q10 11.425 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.425 13.725 11Q13.45 10.575 13 10.3V9H15V15H9V9H10V7H7ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialNfcOutlinedFilled;
