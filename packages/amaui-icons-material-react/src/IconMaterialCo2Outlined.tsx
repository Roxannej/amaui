import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCo2Outlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2Outlined'
      short_name='Co2'

      {...props}
    >
      <path d="M11 15Q10.575 15 10.288 14.712Q10 14.425 10 14V10Q10 9.575 10.288 9.287Q10.575 9 11 9H14Q14.425 9 14.713 9.287Q15 9.575 15 10V14Q15 14.425 14.713 14.712Q14.425 15 14 15ZM11.5 13.5H13.5V10.5H11.5ZM4 15Q3.575 15 3.288 14.712Q3 14.425 3 14V10Q3 9.575 3.288 9.287Q3.575 9 4 9H7Q7.425 9 7.713 9.287Q8 9.575 8 10V11H6.5V10.5H4.5V13.5H6.5V13H8V14Q8 14.425 7.713 14.712Q7.425 15 7 15ZM17 18V15.5Q17 15.075 17.288 14.787Q17.575 14.5 18 14.5H20V13.5H17V12H20.5Q20.925 12 21.212 12.287Q21.5 12.575 21.5 13V14.5Q21.5 14.925 21.212 15.212Q20.925 15.5 20.5 15.5H18.5V16.5H21.5V18Z"/>
    </Icon>
  )
});

export default IconMaterialCo2Outlined;
