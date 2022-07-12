import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrOnRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnRounded'
      short_name='HdrOn'

      {...props}
    >
      <path d="M16.75 15Q16.425 15 16.212 14.787Q16 14.575 16 14.25V10Q16 9.575 16.288 9.287Q16.575 9 17 9H19.5Q20.1 9 20.55 9.45Q21 9.9 21 10.5V11.5Q21 12.075 20.738 12.387Q20.475 12.7 20.1 12.9L20.575 14.025Q20.75 14.45 20.562 14.725Q20.375 15 19.925 15Q19.75 15 19.575 14.887Q19.4 14.775 19.325 14.625L18.6 13H17.5V14.25Q17.5 14.575 17.288 14.787Q17.075 15 16.75 15ZM17.5 11.5H19.5Q19.5 11.5 19.5 11.5Q19.5 11.5 19.5 11.5V10.5Q19.5 10.5 19.5 10.5Q19.5 10.5 19.5 10.5H17.5ZM3.75 15Q3.425 15 3.213 14.787Q3 14.575 3 14.25V9.75Q3 9.425 3.213 9.212Q3.425 9 3.75 9Q4.075 9 4.287 9.212Q4.5 9.425 4.5 9.75V11H6.5V9.75Q6.5 9.425 6.713 9.212Q6.925 9 7.25 9Q7.575 9 7.787 9.212Q8 9.425 8 9.75V14.25Q8 14.575 7.787 14.787Q7.575 15 7.25 15Q6.925 15 6.713 14.787Q6.5 14.575 6.5 14.25V12.5H4.5V14.25Q4.5 14.575 4.287 14.787Q4.075 15 3.75 15ZM10 15Q9.8 15 9.65 14.85Q9.5 14.7 9.5 14.5V9.5Q9.5 9.3 9.65 9.15Q9.8 9 10 9H13Q13.6 9 14.05 9.45Q14.5 9.9 14.5 10.5V13.5Q14.5 14.1 14.05 14.55Q13.6 15 13 15ZM11 13.5H13Q13 13.5 13 13.5Q13 13.5 13 13.5V10.5Q13 10.5 13 10.5Q13 10.5 13 10.5H11Z"/>
    </Icon>
  )
});

export default IconMaterialHdrOnRounded;
