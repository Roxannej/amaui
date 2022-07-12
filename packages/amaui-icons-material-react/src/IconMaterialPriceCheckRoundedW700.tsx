import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceCheckRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheckRoundedW700'
      short_name='PriceCheck'

      {...props}
    >
      <path d="M7.125 15.375Q6.55 15.375 6.138 14.975Q5.725 14.575 5.725 14H4.625Q4.05 14 3.638 13.587Q3.225 13.175 3.225 12.6Q3.225 12.025 3.638 11.625Q4.05 11.225 4.625 11.225H8.225V10H4.625Q4.05 10 3.638 9.587Q3.225 9.175 3.225 8.6V4.6Q3.225 4.025 3.638 3.625Q4.05 3.225 4.625 3.225H5.725Q5.725 2.65 6.138 2.25Q6.55 1.85 7.125 1.85Q7.7 1.85 8.1 2.25Q8.5 2.65 8.5 3.225H9.625Q10.2 3.225 10.6 3.625Q11 4.025 11 4.6Q11 5.175 10.6 5.588Q10.2 6 9.625 6H6V7.225H9.625Q10.2 7.225 10.6 7.625Q11 8.025 11 8.6V12.6Q11 13.175 10.6 13.587Q10.2 14 9.625 14H8.5Q8.5 14.575 8.1 14.975Q7.7 15.375 7.125 15.375ZM14.325 21.25Q14.025 21.25 13.75 21.15Q13.475 21.05 13.225 20.8L10.75 18.325Q10.325 17.9 10.325 17.275Q10.325 16.65 10.75 16.225Q11.175 15.8 11.788 15.8Q12.4 15.8 12.825 16.225L14.325 17.725L18.625 13.425Q19.05 13 19.675 13Q20.3 13 20.725 13.425Q21.15 13.85 21.15 14.475Q21.15 15.1 20.725 15.525L15.425 20.8Q15.175 21.05 14.9 21.15Q14.625 21.25 14.325 21.25Z"/>
    </Icon>
  )
});

export default IconMaterialPriceCheckRoundedW700;