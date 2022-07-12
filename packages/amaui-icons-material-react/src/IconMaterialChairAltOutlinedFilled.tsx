import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairAltOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltOutlinedFilled'
      short_name='ChairAlt'

      {...props}
    >
      <path d="M5 21V14Q5 13.175 5.588 12.587Q6.175 12 7 12H8V10H7Q6.175 10 5.588 9.412Q5 8.825 5 8V5Q5 4.175 5.588 3.587Q6.175 3 7 3H17Q17.825 3 18.413 3.587Q19 4.175 19 5V8Q19 8.825 18.413 9.412Q17.825 10 17 10H16V12H17Q17.825 12 18.413 12.587Q19 13.175 19 14V21H17V18H7V21ZM10 12H14V10H10Z"/>
    </Icon>
  )
});

export default IconMaterialChairAltOutlinedFilled;