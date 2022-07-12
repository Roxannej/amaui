import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddRoadRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoadRounded'
      short_name='AddRoad'

      {...props}
    >
      <path d="M19 23Q18.575 23 18.288 22.712Q18 22.425 18 22V20H16Q15.575 20 15.288 19.712Q15 19.425 15 19Q15 18.575 15.288 18.288Q15.575 18 16 18H18V16Q18 15.575 18.288 15.287Q18.575 15 19 15Q19.425 15 19.712 15.287Q20 15.575 20 16V18H22Q22.425 18 22.712 18.288Q23 18.575 23 19Q23 19.425 22.712 19.712Q22.425 20 22 20H20V22Q20 22.425 19.712 22.712Q19.425 23 19 23ZM19 13Q18.575 13 18.288 12.712Q18 12.425 18 12V5Q18 4.575 18.288 4.287Q18.575 4 19 4Q19.425 4 19.712 4.287Q20 4.575 20 5V12Q20 12.425 19.712 12.712Q19.425 13 19 13ZM5 20Q4.575 20 4.287 19.712Q4 19.425 4 19V5Q4 4.575 4.287 4.287Q4.575 4 5 4Q5.425 4 5.713 4.287Q6 4.575 6 5V19Q6 19.425 5.713 19.712Q5.425 20 5 20ZM12 8Q11.575 8 11.288 7.713Q11 7.425 11 7V5Q11 4.575 11.288 4.287Q11.575 4 12 4Q12.425 4 12.713 4.287Q13 4.575 13 5V7Q13 7.425 12.713 7.713Q12.425 8 12 8ZM12 14Q11.575 14 11.288 13.712Q11 13.425 11 13V11Q11 10.575 11.288 10.287Q11.575 10 12 10Q12.425 10 12.713 10.287Q13 10.575 13 11V13Q13 13.425 12.713 13.712Q12.425 14 12 14ZM12 20Q11.575 20 11.288 19.712Q11 19.425 11 19V17Q11 16.575 11.288 16.288Q11.575 16 12 16Q12.425 16 12.713 16.288Q13 16.575 13 17V19Q13 19.425 12.713 19.712Q12.425 20 12 20Z"/>
    </Icon>
  )
});

export default IconMaterialAddRoadRounded;
