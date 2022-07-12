import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlifeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeSharpW700'
      short_name='Nightlife'

      {...props}
    >
      <path d="M4 21.3V18.15H6V13.475L-0.15 4.225H15.3L9.15 13.475V18.15H11.15V21.3ZM6.625 8.8H8.525L9.475 7.375H5.7ZM16.2 21.3Q14.625 21.3 13.525 20.2Q12.425 19.1 12.425 17.525Q12.425 15.95 13.525 14.862Q14.625 13.775 16.2 13.775Q16.325 13.775 16.462 13.787Q16.6 13.8 16.8 13.85V4.225H23.15V8.775H19.95V17.525Q19.95 19.1 18.863 20.2Q17.775 21.3 16.2 21.3Z"/>
    </Icon>
  )
});

export default IconMaterialNightlifeSharpW700;
