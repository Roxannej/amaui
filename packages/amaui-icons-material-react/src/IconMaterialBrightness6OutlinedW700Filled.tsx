import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness6OutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness6OutlinedW700Filled'
      short_name='Brightness6'

      {...props}
    >
      <path d="M12 23.675 8.525 20.275H3.725V15.475L0.325 12L3.725 8.525V3.7H8.525L12 0.275L15.475 3.7H20.3V8.525L23.725 12L20.3 15.475V20.275H15.475ZM12 17.125Q14.15 17.125 15.65 15.637Q17.15 14.15 17.15 12Q17.15 9.85 15.65 8.35Q14.15 6.85 12 6.85Z"/>
    </Icon>
  )
});

export default IconMaterialBrightness6OutlinedW700Filled;