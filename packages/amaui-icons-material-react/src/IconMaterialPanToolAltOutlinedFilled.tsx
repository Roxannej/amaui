import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolAltOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltOutlinedFilled'
      short_name='PanToolAlt'

      {...props}
    >
      <path d="M11.275 21Q10.825 21 10.363 20.837Q9.9 20.675 9.625 20.4L5.075 15.625L5.9 14.775Q6.075 14.6 6.312 14.525Q6.55 14.45 6.825 14.5L10.075 15.25V4.5Q10.075 3.875 10.513 3.438Q10.95 3 11.575 3Q12.2 3 12.638 3.438Q13.075 3.875 13.075 4.5V10.5H13.975Q14.175 10.5 14.425 10.55Q14.675 10.6 14.875 10.7L18.975 12.75Q19.55 13.025 19.85 13.612Q20.15 14.2 20.05 14.825L19.425 19.275Q19.3 20.025 18.75 20.512Q18.2 21 17.45 21Z"/>
    </Icon>
  )
});

export default IconMaterialPanToolAltOutlinedFilled;