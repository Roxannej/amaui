import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBedOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedOutlinedW700Filled'
      short_name='Bed'

      {...props}
    >
      <path d="M1.15 20.35V13.5Q1.15 12.725 1.425 12.05Q1.7 11.375 2.15 11V8.5Q2.15 6.925 3.287 5.787Q4.425 4.65 6 4.65H10Q10.525 4.65 11.038 4.825Q11.55 5 12 5.275Q12.45 5 12.963 4.825Q13.475 4.65 14 4.65H18Q19.575 4.65 20.713 5.787Q21.85 6.925 21.85 8.5V11Q22.3 11.375 22.575 12.05Q22.85 12.725 22.85 13.5V20.35H19.7V18.35H4.3V20.35ZM13 10.5H18.7V8.5Q18.7 8.2 18.5 8Q18.3 7.8 18 7.8H13.7Q13.4 7.8 13.2 8Q13 8.2 13 8.5ZM5.3 10.5H11V8.5Q11 8.2 10.8 8Q10.6 7.8 10.3 7.8H6Q5.7 7.8 5.5 8Q5.3 8.2 5.3 8.5Z"/>
    </Icon>
  )
});

export default IconMaterialBedOutlinedW700Filled;