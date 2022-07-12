import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsMmaOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMmaOutlinedFilled'
      short_name='SportsMma'

      {...props}
    >
      <path d="M8 21Q7.575 21 7.287 20.712Q7 20.425 7 20V17H17V20Q17 20.425 16.712 20.712Q16.425 21 16 21ZM19 8V10.8Q19 10.925 19 11Q19 11.075 18.95 11.2L18.2 15Q18.125 15.45 17.788 15.725Q17.45 16 17 16H7Q6.55 16 6.213 15.725Q5.875 15.45 5.8 15L5.05 11.2Q5 11.075 5 11Q5 10.925 5 10.8V5Q5 4.175 5.588 3.587Q6.175 3 7 3H15Q15.825 3 16.413 3.587Q17 4.175 17 5V8Q17 7.575 17.288 7.287Q17.575 7 18 7Q18.425 7 18.712 7.287Q19 7.575 19 8ZM8 10H14V7H8Z"/>
    </Icon>
  )
});

export default IconMaterialSportsMmaOutlinedFilled;