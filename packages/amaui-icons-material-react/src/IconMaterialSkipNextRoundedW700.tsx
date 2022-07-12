import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipNextRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextRoundedW700'
      short_name='SkipNext'

      {...props}
    >
      <path d="M18.5 19.575Q17.85 19.575 17.388 19.112Q16.925 18.65 16.925 18V6Q16.925 5.35 17.388 4.887Q17.85 4.425 18.5 4.425Q19.15 4.425 19.613 4.887Q20.075 5.35 20.075 6V18Q20.075 18.65 19.613 19.112Q19.15 19.575 18.5 19.575ZM6.375 17.95Q5.6 18.475 4.763 18.025Q3.925 17.575 3.925 16.625V7.375Q3.925 6.425 4.75 5.975Q5.575 5.525 6.375 6.05L13.325 10.7Q14.025 11.175 14.025 12Q14.025 12.825 13.325 13.3ZM7.075 12ZM7.075 13.675 9.625 12 7.075 10.325Z"/>
    </Icon>
  )
});

export default IconMaterialSkipNextRoundedW700;