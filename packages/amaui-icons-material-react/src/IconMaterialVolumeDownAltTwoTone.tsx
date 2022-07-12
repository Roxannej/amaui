import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeDownAltTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownAltTwoTone'
      short_name='VolumeDownAlt'

      {...props}
    >
      <path d="M5.675 15.7Q5.075 15.7 4.625 15.25Q4.175 14.8 4.175 14.2V9.8Q4.175 9.175 4.625 8.737Q5.075 8.3 5.675 8.3H8.55L11.975 4.875Q12.7 4.15 13.613 4.537Q14.525 4.925 14.525 5.925V18.05Q14.525 19.05 13.613 19.438Q12.7 19.825 11.975 19.125L8.55 15.7ZM16.4 16.2V7.775Q17.775 8.425 18.55 9.55Q19.325 10.675 19.325 12Q19.325 13.3 18.55 14.425Q17.775 15.55 16.4 16.2Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeDownAltTwoTone;
