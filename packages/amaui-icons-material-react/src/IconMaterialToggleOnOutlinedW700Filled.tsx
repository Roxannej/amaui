import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToggleOnOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOnOutlinedW700Filled'
      short_name='ToggleOn'

      {...props}
    >
      <path d="M7 18.775Q4.175 18.775 2.2 16.8Q0.225 14.825 0.225 12Q0.225 9.175 2.2 7.2Q4.175 5.225 7 5.225H17Q19.825 5.225 21.8 7.2Q23.775 9.175 23.775 12Q23.775 14.825 21.8 16.8Q19.825 18.775 17 18.775ZM17 15Q18.25 15 19.125 14.125Q20 13.25 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9Q15.75 9 14.875 9.875Q14 10.75 14 12Q14 13.25 14.875 14.125Q15.75 15 17 15Z"/>
    </Icon>
  )
});

export default IconMaterialToggleOnOutlinedW700Filled;
