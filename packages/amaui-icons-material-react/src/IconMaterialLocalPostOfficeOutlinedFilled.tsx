import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPostOfficeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeOutlinedFilled'
      short_name='LocalPostOffice'

      {...props}
    >
      <path d="M3 22Q2.575 22 2.288 21.712Q2 21.425 2 21V13Q2 12.575 2.288 12.287Q2.575 12 3 12H6V8Q6 5.5 7.75 3.75Q9.5 2 12 2H16Q18.5 2 20.25 3.75Q22 5.5 22 8V22H20V19H16V21Q16 21.425 15.713 21.712Q15.425 22 15 22ZM16 17H20V8Q20 6.35 18.825 5.175Q17.65 4 16 4H12Q10.35 4 9.175 5.175Q8 6.35 8 8V12H15Q15.425 12 15.713 12.287Q16 12.575 16 13ZM10 10V8H18V10ZM9 18.6 14 15.75V14L9 16.85L4 14V15.75Z"/>
    </Icon>
  )
});

export default IconMaterialLocalPostOfficeOutlinedFilled;
