import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreboardOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardOutlinedFilled'
      short_name='Scoreboard'

      {...props}
    >
      <path d="M11.25 11H12.75V9.5H11.25ZM11.25 14.5H12.75V13H11.25ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H7V2H9V4H15V2H17V4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM11.25 18H12.75V16.5H11.25ZM11.25 7.5H12.75V6H11.25ZM15.5 15H18Q18.425 15 18.712 14.712Q19 14.425 19 14V10Q19 9.575 18.712 9.287Q18.425 9 18 9H15.5Q15.075 9 14.788 9.287Q14.5 9.575 14.5 10V14Q14.5 14.425 14.788 14.712Q15.075 15 15.5 15ZM16 13.5H17.5V10.5H16ZM5 15H9.5V13.5H6.5V12.5H8.5Q8.925 12.5 9.213 12.212Q9.5 11.925 9.5 11.5V10Q9.5 9.575 9.213 9.287Q8.925 9 8.5 9H5V10.5H8V11.5H6Q5.575 11.5 5.287 11.787Q5 12.075 5 12.5Z"/>
    </Icon>
  )
});

export default IconMaterialScoreboardOutlinedFilled;
