import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiningOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiningOutlinedFilled'
      short_name='Dining'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM8 19H9.5V12.25Q10.15 12.05 10.575 11.537Q11 11.025 11 10.3V6.5Q11 6.3 10.85 6.15Q10.7 6 10.5 6Q10.3 6 10.15 6.15Q10 6.3 10 6.5V9H9.25V6.5Q9.25 6.3 9.1 6.15Q8.95 6 8.75 6Q8.55 6 8.4 6.15Q8.25 6.3 8.25 6.5V9H7.5V6.5Q7.5 6.3 7.35 6.15Q7.2 6 7 6Q6.8 6 6.65 6.15Q6.5 6.3 6.5 6.5V10.3Q6.5 11.025 6.925 11.537Q7.35 12.05 8 12.25ZM14 19H15.5V12.65Q16.325 12.25 16.788 11.375Q17.25 10.5 17.25 9.325Q17.25 7.9 16.538 6.95Q15.825 6 14.75 6Q13.675 6 12.963 6.95Q12.25 7.9 12.25 9.325Q12.25 10.5 12.713 11.375Q13.175 12.25 14 12.65Z"/>
    </Icon>
  )
});

export default IconMaterialDiningOutlinedFilled;
