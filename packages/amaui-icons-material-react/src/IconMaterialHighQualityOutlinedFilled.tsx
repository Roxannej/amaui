import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHighQualityOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualityOutlinedFilled'
      short_name='HighQuality'

      {...props}
    >
      <path d="M6 15H7.5V13H9.5V15H11V9H9.5V11.5H7.5V9H6ZM14.75 16.5H16.25V15H17Q17.425 15 17.712 14.712Q18 14.425 18 14V10Q18 9.575 17.712 9.287Q17.425 9 17 9H14Q13.575 9 13.288 9.287Q13 9.575 13 10V14Q13 14.425 13.288 14.712Q13.575 15 14 15H14.75ZM14.5 13.5Q14.5 13.5 14.5 13.5Q14.5 13.5 14.5 13.5V10.5Q14.5 10.5 14.5 10.5Q14.5 10.5 14.5 10.5H16.5Q16.5 10.5 16.5 10.5Q16.5 10.5 16.5 10.5V13.5Q16.5 13.5 16.5 13.5Q16.5 13.5 16.5 13.5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialHighQualityOutlinedFilled;
