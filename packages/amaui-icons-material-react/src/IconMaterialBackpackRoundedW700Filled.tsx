import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackpackRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackRoundedW700Filled'
      short_name='Backpack'

      {...props}
    >
      <path d="M5.8 23.35Q4.5 23.35 3.575 22.425Q2.65 21.5 2.65 20.2V7.225Q2.65 5.725 3.475 4.537Q4.3 3.35 5.65 2.95V2.725Q5.65 1.85 6.25 1.25Q6.85 0.65 7.725 0.65Q8.6 0.65 9.2 1.175Q9.8 1.7 9.8 2.55V2.65H14.2V2.55Q14.2 1.7 14.8 1.175Q15.4 0.65 16.275 0.65Q17.15 0.65 17.75 1.25Q18.35 1.85 18.35 2.725V2.95Q19.7 3.35 20.525 4.537Q21.35 5.725 21.35 7.225V20.2Q21.35 21.5 20.425 22.425Q19.5 23.35 18.2 23.35ZM15.125 16.2Q15.625 16.2 15.963 15.85Q16.3 15.5 16.3 15V13.375Q16.3 12.725 15.838 12.262Q15.375 11.8 14.725 11.8H8.875Q8.375 11.8 8.037 12.15Q7.7 12.5 7.7 13Q7.7 13.5 8.037 13.85Q8.375 14.2 8.875 14.2H13.925V15Q13.925 15.5 14.275 15.85Q14.625 16.2 15.125 16.2Z"/>
    </Icon>
  )
});

export default IconMaterialBackpackRoundedW700Filled;
