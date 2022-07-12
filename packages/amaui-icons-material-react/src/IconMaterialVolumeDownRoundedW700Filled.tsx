import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeDownRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownRoundedW700Filled'
      short_name='VolumeDown'

      {...props}
    >
      <path d="M5.55 15.85Q4.9 15.85 4.438 15.387Q3.975 14.925 3.975 14.275V9.725Q3.975 9.075 4.438 8.612Q4.9 8.15 5.55 8.15H8.475L11.975 4.65Q12.725 3.9 13.688 4.312Q14.65 4.725 14.65 5.775V18.225Q14.65 19.275 13.688 19.688Q12.725 20.1 11.975 19.35L8.475 15.85ZM16.65 16.3V7.65Q17.95 8.275 18.738 9.45Q19.525 10.625 19.525 12Q19.525 13.375 18.738 14.525Q17.95 15.675 16.65 16.3Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeDownRoundedW700Filled;
