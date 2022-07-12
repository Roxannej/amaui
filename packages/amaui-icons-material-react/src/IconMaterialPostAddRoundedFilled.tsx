import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPostAddRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddRoundedFilled'
      short_name='PostAdd'

      {...props}
    >
      <path d="M9 11Q8.575 11 8.288 10.712Q8 10.425 8 10Q8 9.575 8.288 9.287Q8.575 9 9 9H15Q15.425 9 15.713 9.287Q16 9.575 16 10Q16 10.425 15.713 10.712Q15.425 11 15 11ZM9 14Q8.575 14 8.288 13.712Q8 13.425 8 13Q8 12.575 8.288 12.287Q8.575 12 9 12H15Q15.425 12 15.713 12.287Q16 12.575 16 13Q16 13.425 15.713 13.712Q15.425 14 15 14ZM9 17Q8.575 17 8.288 16.712Q8 16.425 8 16Q8 15.575 8.288 15.287Q8.575 15 9 15H15Q15.425 15 15.713 15.287Q16 15.575 16 16Q16 16.425 15.713 16.712Q15.425 17 15 17ZM18 9Q17.575 9 17.288 8.712Q17 8.425 17 8V7H16Q15.575 7 15.288 6.713Q15 6.425 15 6Q15 5.575 15.288 5.287Q15.575 5 16 5H17V4Q17 3.575 17.288 3.287Q17.575 3 18 3Q18.425 3 18.712 3.287Q19 3.575 19 4V5H20Q20.425 5 20.712 5.287Q21 5.575 21 6Q21 6.425 20.712 6.713Q20.425 7 20 7H19V8Q19 8.425 18.712 8.712Q18.425 9 18 9ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H13Q13.425 3 13.713 3.287Q14 3.575 14 4Q14 4.425 13.713 4.712Q13.425 5 13 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V11Q19 10.575 19.288 10.287Q19.575 10 20 10Q20.425 10 20.712 10.287Q21 10.575 21 11V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialPostAddRoundedFilled;
