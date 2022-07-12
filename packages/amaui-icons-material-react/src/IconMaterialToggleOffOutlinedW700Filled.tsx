import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToggleOffOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOffOutlinedW700Filled'
      short_name='ToggleOff'

      {...props}
    >
      <path d="M7 18.775Q4.175 18.775 2.2 16.8Q0.225 14.825 0.225 12Q0.225 9.175 2.2 7.2Q4.175 5.225 7 5.225H17Q19.825 5.225 21.8 7.2Q23.775 9.175 23.775 12Q23.775 14.825 21.8 16.8Q19.825 18.775 17 18.775ZM7 15Q8.25 15 9.125 14.125Q10 13.25 10 12Q10 10.75 9.125 9.875Q8.25 9 7 9Q5.75 9 4.875 9.875Q4 10.75 4 12Q4 13.25 4.875 14.125Q5.75 15 7 15Z"/>
    </Icon>
  )
});

export default IconMaterialToggleOffOutlinedW700Filled;
