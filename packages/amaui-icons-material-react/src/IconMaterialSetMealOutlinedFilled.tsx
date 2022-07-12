import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSetMealOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SetMealOutlinedFilled'
      short_name='SetMeal'

      {...props}
    >
      <path d="M3 15Q2.175 15 1.588 14.412Q1 13.825 1 13V4Q1 3.175 1.588 2.587Q2.175 2 3 2H21Q21.825 2 22.413 2.587Q23 3.175 23 4V13Q23 13.825 22.413 14.412Q21.825 15 21 15ZM3.075 18.5 3 17 20.975 16.05 21.05 17.55ZM3 20.975V19.475H21V20.975ZM10.25 11.5Q12.2 11.5 13.888 10.825Q15.575 10.15 16.8 8.85Q16.95 9.875 17.9 10.438Q18.85 11 20 11V6Q18.825 6 17.887 6.588Q16.95 7.175 16.8 8.2Q15.45 6.85 13.812 6.175Q12.175 5.5 10.25 5.5Q8.1 5.5 6.275 6.312Q4.45 7.125 3.5 8.5Q4.45 9.875 6.275 10.688Q8.1 11.5 10.25 11.5Z"/>
    </Icon>
  )
});

export default IconMaterialSetMealOutlinedFilled;
