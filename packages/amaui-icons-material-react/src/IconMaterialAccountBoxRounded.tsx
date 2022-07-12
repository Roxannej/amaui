import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBoxRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxRounded'
      short_name='AccountBox'

      {...props}
    >
      <path d="M5 17.85Q6.35 16.525 8.138 15.762Q9.925 15 12 15Q14.075 15 15.863 15.762Q17.65 16.525 19 17.85V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5ZM12 13Q13.45 13 14.475 11.975Q15.5 10.95 15.5 9.5Q15.5 8.05 14.475 7.025Q13.45 6 12 6Q10.55 6 9.525 7.025Q8.5 8.05 8.5 9.5Q8.5 10.95 9.525 11.975Q10.55 13 12 13ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM7 19H17Q17 18.925 17 18.875Q17 18.825 17 18.75Q15.95 17.875 14.675 17.438Q13.4 17 12 17Q10.6 17 9.325 17.438Q8.05 17.875 7 18.75Q7 18.825 7 18.875Q7 18.925 7 19ZM12 11Q11.375 11 10.938 10.562Q10.5 10.125 10.5 9.5Q10.5 8.875 10.938 8.438Q11.375 8 12 8Q12.625 8 13.062 8.438Q13.5 8.875 13.5 9.5Q13.5 10.125 13.062 10.562Q12.625 11 12 11ZM12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Q12 11.425 12 11.425Z"/>
    </Icon>
  )
});

export default IconMaterialAccountBoxRounded;