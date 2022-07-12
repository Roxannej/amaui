import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLuggageOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LuggageOutlinedFilled'
      short_name='Luggage'

      {...props}
    >
      <path d="M7 21Q6.175 21 5.588 20.413Q5 19.825 5 19V8Q5 7.175 5.588 6.588Q6.175 6 7 6H9V3Q9 2.575 9.288 2.287Q9.575 2 10 2H14Q14.425 2 14.713 2.287Q15 2.575 15 3V6H17Q17.825 6 18.413 6.588Q19 7.175 19 8V19Q19 19.825 18.413 20.413Q17.825 21 17 21Q17 21.425 16.712 21.712Q16.425 22 16 22Q15.575 22 15.288 21.712Q15 21.425 15 21H9Q9 21.425 8.713 21.712Q8.425 22 8 22Q7.575 22 7.287 21.712Q7 21.425 7 21ZM10.5 6H13.5V3.5H10.5ZM8 18H9.5V9H8ZM11.25 18H12.75V9H11.25ZM14.5 18H16V9H14.5Z"/>
    </Icon>
  )
});

export default IconMaterialLuggageOutlinedFilled;
