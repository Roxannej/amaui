import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermCameraMicOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermCameraMicOutlinedFilled'
      short_name='PermCameraMic'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L9 3H15L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21H13V17.9Q15.15 17.55 16.575 15.887Q18 14.225 18 12H16Q16 13.65 14.825 14.825Q13.65 16 12 16Q10.35 16 9.175 14.825Q8 13.65 8 12H6Q6 14.225 7.425 15.887Q8.85 17.55 11 17.9V21ZM12 14Q12.825 14 13.413 13.412Q14 12.825 14 12V8Q14 7.175 13.413 6.588Q12.825 6 12 6Q11.175 6 10.588 6.588Q10 7.175 10 8V12Q10 12.825 10.588 13.412Q11.175 14 12 14Z"/>
    </Icon>
  )
});

export default IconMaterialPermCameraMicOutlinedFilled;
