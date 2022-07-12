import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAppBlockingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlockingRoundedFilled'
      short_name='AppBlocking'

      {...props}
    >
      <path d="M18 16Q16.35 16 15.175 14.825Q14 13.65 14 12Q14 10.35 15.175 9.175Q16.35 8 18 8Q19.65 8 20.825 9.175Q22 10.35 22 12Q22 13.65 20.825 14.825Q19.65 16 18 16ZM18 14.5Q18.3 14.5 18.587 14.425Q18.875 14.35 19.15 14.2L15.8 10.85Q15.65 11.125 15.575 11.412Q15.5 11.7 15.5 12Q15.5 13.05 16.225 13.775Q16.95 14.5 18 14.5ZM20.2 13.15Q20.35 12.875 20.425 12.587Q20.5 12.3 20.5 12Q20.5 10.95 19.775 10.225Q19.05 9.5 18 9.5Q17.7 9.5 17.413 9.575Q17.125 9.65 16.85 9.8ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V7H17V6H7V18H17V17H19V21Q19 21.825 18.413 22.413Q17.825 23 17 23Z"/>
    </Icon>
  )
});

export default IconMaterialAppBlockingRoundedFilled;