import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCallOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallOutlinedW100Filled'
      short_name='VideoCall'

      {...props}
    >
      <path d="M5.425 18.7Q4.775 18.7 4.35 18.275Q3.925 17.85 3.925 17.2V6.8Q3.925 6.15 4.35 5.725Q4.775 5.3 5.425 5.3H15.825Q16.475 5.3 16.9 5.725Q17.325 6.15 17.325 6.8V11.5L20.075 8.75V15.25L17.325 12.5V17.2Q17.325 17.85 16.9 18.275Q16.475 18.7 15.825 18.7ZM10.275 15.35H10.975V12.35H13.975V11.65H10.975V8.65H10.275V11.65H7.275V12.35H10.275Z"/>
    </Icon>
  )
});

export default IconMaterialVideoCallOutlinedW100Filled;
