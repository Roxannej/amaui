import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayPrimaryPortraitOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryPortraitOutlinedFilled'
      short_name='StayPrimaryPortrait'

      {...props}
    >
      <path d="M11 13V7H13V13ZM12 17Q11.575 17 11.288 16.712Q11 16.425 11 16Q11 15.575 11.288 15.287Q11.575 15 12 15Q12.425 15 12.713 15.287Q13 15.575 13 16Q13 16.425 12.713 16.712Q12.425 17 12 17ZM7 18H17V6H7ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23Z"/>
    </Icon>
  )
});

export default IconMaterialStayPrimaryPortraitOutlinedFilled;