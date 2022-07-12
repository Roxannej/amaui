import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaymentsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsOutlinedFilled'
      short_name='Payments'

      {...props}
    >
      <path d="M3 20Q2.175 20 1.588 19.413Q1 18.825 1 18V7H3V18Q3 18 3 18Q3 18 3 18H20V20ZM7 16Q6.175 16 5.588 15.412Q5 14.825 5 14V6Q5 5.175 5.588 4.588Q6.175 4 7 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V14Q23 14.825 22.413 15.412Q21.825 16 21 16ZM7 14H9Q9 13.175 8.412 12.587Q7.825 12 7 12V14Q7 14 7 14Q7 14 7 14ZM19 14H21Q21 14 21 14Q21 14 21 14V12Q20.175 12 19.587 12.587Q19 13.175 19 14ZM14 13Q15.25 13 16.125 12.125Q17 11.25 17 10Q17 8.75 16.125 7.875Q15.25 7 14 7Q12.75 7 11.875 7.875Q11 8.75 11 10Q11 11.25 11.875 12.125Q12.75 13 14 13ZM7 8Q7.825 8 8.412 7.412Q9 6.825 9 6H7Q7 6 7 6Q7 6 7 6ZM21 8V6Q21 6 21 6Q21 6 21 6H19Q19 6.825 19.587 7.412Q20.175 8 21 8Z"/>
    </Icon>
  )
});

export default IconMaterialPaymentsOutlinedFilled;