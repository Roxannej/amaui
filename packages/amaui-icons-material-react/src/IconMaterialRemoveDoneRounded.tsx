import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveDoneRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveDoneRounded'
      short_name='RemoveDone'

      {...props}
    >
      <path d="M20.975 21.1 15.075 15.2 12.925 17.35Q12.775 17.5 12.6 17.562Q12.425 17.625 12.225 17.625Q12.025 17.625 11.85 17.562Q11.675 17.5 11.525 17.35L7.275 13.1Q7 12.825 7 12.387Q7 11.95 7.275 11.675Q7.55 11.4 7.988 11.4Q8.425 11.4 8.7 11.675L12.225 15.2L13.625 13.8L3.975 4.15Q3.7 3.875 3.7 3.438Q3.7 3 3.975 2.725Q4.25 2.45 4.688 2.45Q5.125 2.45 5.4 2.725L22.4 19.725Q22.675 20 22.675 20.4Q22.675 20.8 22.375 21.1Q22.1 21.375 21.675 21.375Q21.25 21.375 20.975 21.1ZM17.875 12.4 16.475 11 20.7 6.775Q20.975 6.5 21.4 6.5Q21.825 6.5 22.1 6.775Q22.375 7.05 22.375 7.475Q22.375 7.9 22.1 8.175ZM15.025 9.55 13.625 8.15 15.075 6.7Q15.35 6.425 15.775 6.425Q16.2 6.425 16.475 6.7Q16.75 6.975 16.75 7.4Q16.75 7.825 16.475 8.1ZM6.575 17.625Q6.375 17.625 6.2 17.562Q6.025 17.5 5.875 17.35L1.625 13.1Q1.35 12.825 1.35 12.4Q1.35 11.975 1.625 11.7Q1.9 11.425 2.325 11.425Q2.75 11.425 3.025 11.7L6.575 15.25L7.975 16.65L7.275 17.35Q7.125 17.5 6.95 17.562Q6.775 17.625 6.575 17.625Z"/>
    </Icon>
  )
});

export default IconMaterialRemoveDoneRounded;
