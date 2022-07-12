import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastConnectedOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnectedOutlinedFilled'
      short_name='CastConnected'

      {...props}
    >
      <path d="M15 20V18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V7H2V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM2 20H5Q5 18.75 4.125 17.875Q3.25 17 2 17ZM7 20H9Q9 17.075 6.963 15.037Q4.925 13 2 13V15Q4.075 15 5.537 16.462Q7 17.925 7 20ZM11 20H13Q13 17.725 12.137 15.725Q11.275 13.725 9.775 12.225Q8.275 10.725 6.275 9.863Q4.275 9 2 9V11Q3.875 11 5.513 11.712Q7.15 12.425 8.363 13.637Q9.575 14.85 10.288 16.488Q11 18.125 11 20ZM14.375 16Q13.65 13.65 11.812 11.475Q9.975 9.3 7 8H18V16Z"/>
    </Icon>
  )
});

export default IconMaterialCastConnectedOutlinedFilled;
