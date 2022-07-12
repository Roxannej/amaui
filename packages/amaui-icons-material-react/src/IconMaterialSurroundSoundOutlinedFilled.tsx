import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSurroundSoundOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurroundSoundOutlinedFilled'
      short_name='SurroundSound'

      {...props}
    >
      <path d="M16.95 16.95Q17.9 16 18.45 14.738Q19 13.475 19 12Q19 10.525 18.45 9.262Q17.9 8 16.95 7.05L15.55 8.45Q16.225 9.125 16.613 10.037Q17 10.95 17 12Q17 13.05 16.613 13.962Q16.225 14.875 15.55 15.55ZM7.05 16.95 8.45 15.55Q7.775 14.875 7.388 13.962Q7 13.05 7 12Q7 10.95 7.388 10.037Q7.775 9.125 8.45 8.45L7.05 7.05Q6.1 8 5.55 9.262Q5 10.525 5 12Q5 13.475 5.55 14.738Q6.1 16 7.05 16.95ZM12 15Q13.25 15 14.125 14.125Q15 13.25 15 12Q15 10.75 14.125 9.875Q13.25 9 12 9Q10.75 9 9.875 9.875Q9 10.75 9 12Q9 13.25 9.875 14.125Q10.75 15 12 15ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialSurroundSoundOutlinedFilled;