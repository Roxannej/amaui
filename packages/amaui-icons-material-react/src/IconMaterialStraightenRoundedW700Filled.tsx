import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenRoundedW700Filled'
      short_name='Straighten'

      {...props}
    >
      <path d="M4.375 18.625Q3.05 18.625 2.138 17.712Q1.225 16.8 1.225 15.475V8.525Q1.225 7.2 2.138 6.287Q3.05 5.375 4.375 5.375H7V11Q7 11.425 7.287 11.712Q7.575 12 8 12Q8.425 12 8.713 11.712Q9 11.425 9 11V5.375H11V11Q11 11.425 11.288 11.712Q11.575 12 12 12Q12.425 12 12.713 11.712Q13 11.425 13 11V5.375H15V11Q15 11.425 15.288 11.712Q15.575 12 16 12Q16.425 12 16.712 11.712Q17 11.425 17 11V5.375H19.625Q20.95 5.375 21.863 6.287Q22.775 7.2 22.775 8.525V15.475Q22.775 16.8 21.863 17.712Q20.95 18.625 19.625 18.625Z"/>
    </Icon>
  )
});

export default IconMaterialStraightenRoundedW700Filled;
