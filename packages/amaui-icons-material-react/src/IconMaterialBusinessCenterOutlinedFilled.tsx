import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBusinessCenterOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterOutlinedFilled'
      short_name='BusinessCenter'

      {...props}
    >
      <path d="M8 6V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V13H15V11H9V13H2V8Q2 7.175 2.588 6.588Q3.175 6 4 6ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4ZM11 15V13H13V15ZM2 15H9V17H15V15H22V19Q22 19.825 21.413 20.413Q20.825 21 20 21H4Q3.175 21 2.588 20.413Q2 19.825 2 19Z"/>
    </Icon>
  )
});

export default IconMaterialBusinessCenterOutlinedFilled;
