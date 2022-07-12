import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSingleBedOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedOutlinedFilled'
      short_name='SingleBed'

      {...props}
    >
      <path d="M7 19H6L5.35 17H4V11.975Q4 11.15 4.588 10.575Q5.175 10 6 10V7Q6 6.175 6.588 5.588Q7.175 5 8 5H16Q16.825 5 17.413 5.588Q18 6.175 18 7V10Q18.825 10 19.413 10.587Q20 11.175 20 12V17H18.65L18 19H17L16.35 17H7.65ZM13 10H16V7Q16 7 16 7Q16 7 16 7H13ZM8 10H11V7H8Q8 7 8 7Q8 7 8 7Z"/>
    </Icon>
  )
});

export default IconMaterialSingleBedOutlinedFilled;