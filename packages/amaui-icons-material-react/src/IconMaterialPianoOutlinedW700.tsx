import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoOutlinedW700'
      short_name='Piano'

      {...props}
    >
      <path d="M5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85ZM5.3 18.7H7.85V14.7H7.8Q7.3 14.7 6.95 14.35Q6.6 14 6.6 13.5V5.3H5.3Q5.3 5.3 5.3 5.3Q5.3 5.3 5.3 5.3V18.7Q5.3 18.7 5.3 18.7Q5.3 18.7 5.3 18.7ZM16.15 18.7H18.7Q18.7 18.7 18.7 18.7Q18.7 18.7 18.7 18.7V5.3Q18.7 5.3 18.7 5.3Q18.7 5.3 18.7 5.3H17.4V13.5Q17.4 14 17.05 14.35Q16.7 14.7 16.2 14.7H16.15ZM10.125 18.7H13.875V14.7H13.825Q13.325 14.7 12.975 14.35Q12.625 14 12.625 13.5V5.3H11.375V13.525Q11.375 14.025 11.025 14.362Q10.675 14.7 10.175 14.7H10.125Z"/>
    </Icon>
  )
});

export default IconMaterialPianoOutlinedW700;