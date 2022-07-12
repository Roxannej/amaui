import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGoogleWifiTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleWifiTwoTone'
      short_name='GoogleWifi'

      {...props}
    >
      <path d="M4.65 20.425 4.3 19.35h-.55q-.925 0-1.537-.65-.613-.65-.563-1.575L2 12h20.025l.325 5.125q.05.925-.562 1.575-.613.65-1.538.65h-.55l-.35 1.075ZM2.125 9.9 2.4 5.575q.05-.85.675-1.425.625-.575 1.45-.575H19.5q.825 0 1.438.575.612.575.662 1.4l.3 4.35Z"/>
    </Icon>
  )
});

export default IconMaterialGoogleWifiTwoTone;