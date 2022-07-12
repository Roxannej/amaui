import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial2kRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kRounded'
      short_name='2k'

      {...props}
    >
      <path d="M13.75 15Q14.075 15 14.288 14.787Q14.5 14.575 14.5 14.25V12.75L16.025 14.7Q16.125 14.825 16.263 14.912Q16.4 15 16.575 15Q17.05 15 17.238 14.575Q17.425 14.15 17.15 13.8L15.75 12L17.2 10.15Q17.475 9.8 17.263 9.4Q17.05 9 16.625 9Q16.45 9 16.3 9.075Q16.15 9.15 16.025 9.3L14.5 11.25V9.725Q14.5 9.425 14.288 9.212Q14.075 9 13.75 9Q13.425 9 13.213 9.212Q13 9.425 13 9.75V14.275Q13 14.575 13.213 14.787Q13.425 15 13.75 15ZM7.5 15H10.275Q10.575 15 10.788 14.787Q11 14.575 11 14.25Q11 13.925 10.788 13.712Q10.575 13.5 10.25 13.5H8V12.5H10Q10.425 12.5 10.713 12.212Q11 11.925 11 11.5V10Q11 9.575 10.713 9.287Q10.425 9 10 9H7.225Q6.925 9 6.713 9.212Q6.5 9.425 6.5 9.75Q6.5 10.075 6.713 10.287Q6.925 10.5 7.25 10.5H9.5V11.5H7.5Q7.075 11.5 6.787 11.787Q6.5 12.075 6.5 12.5V14Q6.5 14.425 6.787 14.712Q7.075 15 7.5 15ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  )
});

export default IconMaterial2kRounded;
