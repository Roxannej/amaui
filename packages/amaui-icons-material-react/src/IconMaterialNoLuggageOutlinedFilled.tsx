import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoLuggageOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageOutlinedFilled'
      short_name='NoLuggage'

      {...props}
    >
      <path d="M20.475 23.3 17.95 20.775Q17.75 20.9 17.513 20.95Q17.275 21 17 21Q17 21.425 16.712 21.712Q16.425 22 16 22Q15.575 22 15.288 21.712Q15 21.425 15 21H9Q9 21.425 8.713 21.712Q8.425 22 8 22Q7.575 22 7.287 21.712Q7 21.425 7 21Q6.175 21 5.588 20.413Q5 19.825 5 19V8Q5 7.95 5 7.912Q5 7.875 5 7.825L0.675 3.5L2.1 2.075L21.9 21.875ZM12.75 15.575 11.25 14.075V18H12.75ZM15.175 18 14.5 17.325V18H15.175ZM9.5 12.325 8 10.825V18H9.5ZM10.5 6H13.5V3.5H10.5ZM19 16.125 16 13.125V9H14.5V11.625L12.75 9.875V9H11.875L8.875 6H9V3Q9 2.575 9.288 2.287Q9.575 2 10 2H14Q14.425 2 14.713 2.287Q15 2.575 15 3V6H17Q17.825 6 18.413 6.588Q19 7.175 19 8Z"/>
    </Icon>
  )
});

export default IconMaterialNoLuggageOutlinedFilled;
