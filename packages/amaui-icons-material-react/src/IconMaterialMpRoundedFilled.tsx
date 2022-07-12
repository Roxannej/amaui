import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMpRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpRoundedFilled'
      short_name='Mp'

      {...props}
    >
      <path d="M14.25 15Q14.575 15 14.788 14.787Q15 14.575 15 14.25V13.5H17Q17.425 13.5 17.712 13.212Q18 12.925 18 12.5V10Q18 9.575 17.712 9.287Q17.425 9 17 9H14.5Q14.075 9 13.788 9.287Q13.5 9.575 13.5 10V14.25Q13.5 14.575 13.713 14.787Q13.925 15 14.25 15ZM15 12V10.5H16.5V12ZM6.75 15Q7.075 15 7.287 14.787Q7.5 14.575 7.5 14.25V10.5H8.5V12.75Q8.5 13.075 8.713 13.287Q8.925 13.5 9.25 13.5Q9.575 13.5 9.788 13.287Q10 13.075 10 12.75V10.5H11V14.25Q11 14.575 11.213 14.787Q11.425 15 11.75 15Q12.075 15 12.288 14.787Q12.5 14.575 12.5 14.25V10Q12.5 9.575 12.213 9.287Q11.925 9 11.5 9H7Q6.575 9 6.287 9.287Q6 9.575 6 10V14.25Q6 14.575 6.213 14.787Q6.425 15 6.75 15ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialMpRoundedFilled;
