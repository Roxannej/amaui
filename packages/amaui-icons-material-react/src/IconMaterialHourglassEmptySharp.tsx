import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassEmptySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassEmptySharp'
      short_name='HourglassEmpty'

      {...props}
    >
      <path d="M8 20H16V17Q16 15.35 14.825 14.175Q13.65 13 12 13Q10.35 13 9.175 14.175Q8 15.35 8 17ZM12 11Q13.65 11 14.825 9.825Q16 8.65 16 7V4H8V7Q8 8.65 9.175 9.825Q10.35 11 12 11ZM4 22V20H6V17Q6 15.475 6.713 14.137Q7.425 12.8 8.7 12Q7.425 11.2 6.713 9.862Q6 8.525 6 7V4H4V2H20V4H18V7Q18 8.525 17.288 9.862Q16.575 11.2 15.3 12Q16.575 12.8 17.288 14.137Q18 15.475 18 17V20H20V22Z"/>
    </Icon>
  )
});

export default IconMaterialHourglassEmptySharp;