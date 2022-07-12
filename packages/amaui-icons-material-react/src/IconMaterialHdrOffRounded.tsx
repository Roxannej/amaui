import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffRounded'
      short_name='HdrOff'

      {...props}
    >
      <path d="M19.925 15Q19.75 15 19.575 14.887Q19.4 14.775 19.325 14.625L18.6 13H17.5V14.25Q17.5 14.35 17.488 14.425Q17.475 14.5 17.425 14.575L16 13.15V10Q16 9.575 16.288 9.287Q16.575 9 17 9H19.5Q20.1 9 20.55 9.45Q21 9.9 21 10.5V11.5Q21 11.95 20.738 12.312Q20.475 12.675 20.1 12.9L20.575 14.025Q20.75 14.45 20.562 14.725Q20.375 15 19.925 15ZM17.5 11.5H19.5Q19.5 11.5 19.5 11.5Q19.5 11.5 19.5 11.5V10.5Q19.5 10.5 19.5 10.5Q19.5 10.5 19.5 10.5H17.5ZM19.075 21.875 2.1 4.9Q1.825 4.625 1.812 4.212Q1.8 3.8 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.45Q20.8 20.75 20.788 21.15Q20.775 21.55 20.5 21.85Q20.2 22.15 19.788 22.163Q19.375 22.175 19.075 21.875ZM14.5 11.65 11.85 9H13Q13.6 9 14.05 9.45Q14.5 9.9 14.5 10.5ZM3 14.25V9.75Q3 9.425 3.213 9.212Q3.425 9 3.75 9Q4.075 9 4.287 9.212Q4.5 9.425 4.5 9.75V11H6.5V9.75Q6.5 9.425 6.713 9.212Q6.925 9 7.25 9Q7.575 9 7.787 9.212Q8 9.425 8 9.75V14.25Q8 14.575 7.787 14.787Q7.575 15 7.25 15Q6.925 15 6.713 14.787Q6.5 14.575 6.5 14.25V12.5H4.5V14.25Q4.5 14.575 4.287 14.787Q4.075 15 3.75 15Q3.425 15 3.213 14.787Q3 14.575 3 14.25ZM9.5 10.9 11 12.4V13.5H12.125Q12.125 13.5 12.125 13.5Q12.125 13.5 12.125 13.5L13.5 14.9Q13.375 14.95 13.25 14.975Q13.125 15 13 15H9.5Z"/>
    </Icon>
  )
});

export default IconMaterialHdrOffRounded;
