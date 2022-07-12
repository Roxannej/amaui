import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactPhoneOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneOutlinedFilled'
      short_name='ContactPhone'

      {...props}
    >
      <path d="M2 21Q1.175 21 0.588 20.413Q0 19.825 0 19V5Q0 4.175 0.588 3.587Q1.175 3 2 3H22Q22.825 3 23.413 3.587Q24 4.175 24 5V19Q24 19.825 23.413 20.413Q22.825 21 22 21ZM15.9 19H22Q22 19 22 19Q22 19 22 19V5Q22 5 22 5Q22 5 22 5H2Q2 5 2 5Q2 5 2 5V19Q2 19 2 19Q2 19 2 19H2.1Q3.15 17.125 5 16.062Q6.85 15 9 15Q11.15 15 13 16.062Q14.85 17.125 15.9 19ZM9 14Q10.25 14 11.125 13.125Q12 12.25 12 11Q12 9.75 11.125 8.875Q10.25 8 9 8Q7.75 8 6.875 8.875Q6 9.75 6 11Q6 12.25 6.875 13.125Q7.75 14 9 14ZM19 18Q17.65 16.95 16.825 15.337Q16 13.725 16 12Q16 10.275 16.825 8.662Q17.65 7.05 19 6L21 8L19.5 10H17.85Q17.7 10.5 17.6 10.988Q17.5 11.475 17.5 12Q17.5 12.525 17.6 13.037Q17.7 13.55 17.85 14H19.5L21 16Z"/>
    </Icon>
  )
});

export default IconMaterialContactPhoneOutlinedFilled;