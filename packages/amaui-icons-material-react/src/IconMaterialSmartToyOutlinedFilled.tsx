import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartToyOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartToyOutlinedFilled'
      short_name='SmartToy'

      {...props}
    >
      <path d="M4 15Q2.75 15 1.875 14.125Q1 13.25 1 12Q1 10.75 1.875 9.875Q2.75 9 4 9V7Q4 6.175 4.588 5.588Q5.175 5 6 5H9Q9 3.75 9.875 2.875Q10.75 2 12 2Q13.25 2 14.125 2.875Q15 3.75 15 5H18Q18.825 5 19.413 5.588Q20 6.175 20 7V9Q21.25 9 22.125 9.875Q23 10.75 23 12Q23 13.25 22.125 14.125Q21.25 15 20 15V19Q20 19.825 19.413 20.413Q18.825 21 18 21H6Q5.175 21 4.588 20.413Q4 19.825 4 19ZM9 13Q9.625 13 10.062 12.562Q10.5 12.125 10.5 11.5Q10.5 10.875 10.062 10.438Q9.625 10 9 10Q8.375 10 7.938 10.438Q7.5 10.875 7.5 11.5Q7.5 12.125 7.938 12.562Q8.375 13 9 13ZM15 13Q15.625 13 16.062 12.562Q16.5 12.125 16.5 11.5Q16.5 10.875 16.062 10.438Q15.625 10 15 10Q14.375 10 13.938 10.438Q13.5 10.875 13.5 11.5Q13.5 12.125 13.938 12.562Q14.375 13 15 13ZM8 17H16V15H8Z"/>
    </Icon>
  )
});

export default IconMaterialSmartToyOutlinedFilled;
