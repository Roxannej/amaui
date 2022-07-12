import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodOutlinedW700Filled'
      short_name='Aod'

      {...props}
    >
      <path d="M8.375 11.5V10H15.625V11.5ZM9.375 14.5V13H14.625V14.5ZM7.375 17.625H16.625V6.375H7.375ZM7.375 23.775Q6.05 23.775 5.138 22.862Q4.225 21.95 4.225 20.625V3.375Q4.225 2.05 5.138 1.137Q6.05 0.225 7.375 0.225H16.625Q17.95 0.225 18.863 1.137Q19.775 2.05 19.775 3.375V20.625Q19.775 21.95 18.863 22.862Q17.95 23.775 16.625 23.775Z"/>
    </Icon>
  )
});

export default IconMaterialAodOutlinedW700Filled;
