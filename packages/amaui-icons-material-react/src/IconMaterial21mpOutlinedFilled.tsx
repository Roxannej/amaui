import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial21mpOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='21mpOutlinedFilled'
      short_name='21mp'

      {...props}
    >
      <path d="M7.5 11.5H12V10H9V9H11Q11.425 9 11.713 8.712Q12 8.425 12 8V6.5Q12 6.075 11.713 5.787Q11.425 5.5 11 5.5H7.5V7H10.5V8H8.5Q8.075 8 7.788 8.287Q7.5 8.575 7.5 9ZM14.5 11.5H16V5.5H13V7H14.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM7 12.5Q6.575 12.5 6.287 12.787Q6 13.075 6 13.5V18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V13.5Q12.5 13.075 12.213 12.787Q11.925 12.5 11.5 12.5ZM13.5 12.5V18.5H15V17H17Q17.425 17 17.712 16.712Q18 16.425 18 16V13.5Q18 13.075 17.712 12.787Q17.425 12.5 17 12.5ZM15 14H16.5V15.5H15Z"/>
    </Icon>
  )
});

export default IconMaterial21mpOutlinedFilled;
