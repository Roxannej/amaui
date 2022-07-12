import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolcanoSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoSharpW700Filled'
      short_name='Volcano'

      {...props}
    >
      <path d="M0.8 23.525 5.5 13H8.475L10.475 8H18.575L23.025 23.525ZM13 5V0.225H15.775V5ZM18.475 7.05 16.55 5.1 19.9 1.75 21.875 3.675ZM10.275 7.05 6.925 3.675 8.85 1.725 12.225 5.1Z"/>
    </Icon>
  )
});

export default IconMaterialVolcanoSharpW700Filled;
