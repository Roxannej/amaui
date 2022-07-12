import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrOnOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnOutlinedFilled'
      short_name='HdrOn'

      {...props}
    >
      <path d="M16 15V9H19.5Q20.1 9 20.55 9.45Q21 9.9 21 10.5V11.5Q21 12.075 20.738 12.387Q20.475 12.7 20.1 12.9L21 15H19.5L18.6 13H17.5V15ZM17.5 11.5H19.5Q19.5 11.5 19.5 11.5Q19.5 11.5 19.5 11.5V10.5Q19.5 10.5 19.5 10.5Q19.5 10.5 19.5 10.5H17.5ZM3 15V9H4.5V11H6.5V9H8V15H6.5V12.5H4.5V15ZM9.5 15V9H13Q13.6 9 14.05 9.45Q14.5 9.9 14.5 10.5V13.5Q14.5 14.1 14.05 14.55Q13.6 15 13 15ZM11 13.5H13Q13 13.5 13 13.5Q13 13.5 13 13.5V10.5Q13 10.5 13 10.5Q13 10.5 13 10.5H11Z"/>
    </Icon>
  )
});

export default IconMaterialHdrOnOutlinedFilled;
