import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial9mpOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='9mpOutlinedFilled'
      short_name='9mp'

      {...props}
    >
      <path d="M10 11.5H13.5Q13.925 11.5 14.213 11.212Q14.5 10.925 14.5 10.5V6.5Q14.5 6.075 14.213 5.787Q13.925 5.5 13.5 5.5H11Q10.575 5.5 10.288 5.787Q10 6.075 10 6.5V8Q10 8.425 10.288 8.712Q10.575 9 11 9H13V10H10ZM11.5 8V6.5H13V8ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM7 12.5Q6.575 12.5 6.287 12.787Q6 13.075 6 13.5V18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V13.5Q12.5 13.075 12.213 12.787Q11.925 12.5 11.5 12.5ZM13.5 12.5V18.5H15V17H17Q17.425 17 17.712 16.712Q18 16.425 18 16V13.5Q18 13.075 17.712 12.787Q17.425 12.5 17 12.5ZM15 14H16.5V15.5H15Z"/>
    </Icon>
  )
});

export default IconMaterial9mpOutlinedFilled;