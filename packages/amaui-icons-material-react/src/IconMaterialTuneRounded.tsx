import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTuneRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TuneRounded'
      short_name='Tune'

      {...props}
    >
      <path d="M4 19Q3.575 19 3.288 18.712Q3 18.425 3 18Q3 17.575 3.288 17.288Q3.575 17 4 17H8Q8.425 17 8.713 17.288Q9 17.575 9 18Q9 18.425 8.713 18.712Q8.425 19 8 19ZM4 7Q3.575 7 3.288 6.713Q3 6.425 3 6Q3 5.575 3.288 5.287Q3.575 5 4 5H12Q12.425 5 12.713 5.287Q13 5.575 13 6Q13 6.425 12.713 6.713Q12.425 7 12 7ZM12 21Q11.575 21 11.288 20.712Q11 20.425 11 20V16Q11 15.575 11.288 15.287Q11.575 15 12 15Q12.425 15 12.713 15.287Q13 15.575 13 16V17H20Q20.425 17 20.712 17.288Q21 17.575 21 18Q21 18.425 20.712 18.712Q20.425 19 20 19H13V20Q13 20.425 12.713 20.712Q12.425 21 12 21ZM8 15Q7.575 15 7.287 14.712Q7 14.425 7 14V13H4Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H7V10Q7 9.575 7.287 9.287Q7.575 9 8 9Q8.425 9 8.713 9.287Q9 9.575 9 10V14Q9 14.425 8.713 14.712Q8.425 15 8 15ZM12 13Q11.575 13 11.288 12.712Q11 12.425 11 12Q11 11.575 11.288 11.287Q11.575 11 12 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM16 9Q15.575 9 15.288 8.712Q15 8.425 15 8V4Q15 3.575 15.288 3.287Q15.575 3 16 3Q16.425 3 16.712 3.287Q17 3.575 17 4V5H20Q20.425 5 20.712 5.287Q21 5.575 21 6Q21 6.425 20.712 6.713Q20.425 7 20 7H17V8Q17 8.425 16.712 8.712Q16.425 9 16 9Z"/>
    </Icon>
  )
});

export default IconMaterialTuneRounded;
