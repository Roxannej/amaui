import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness4OutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4OutlinedW700Filled'
      short_name='Brightness4'

      {...props}
    >
      <path d="M12 23.675 8.525 20.275H3.725V15.475L0.325 12L3.725 8.525V3.7H8.525L12 0.275L15.475 3.7H20.3V8.525L23.725 12L20.3 15.475V20.275H15.475ZM12.025 17.125Q14.175 17.125 15.663 15.625Q17.15 14.125 17.15 11.975Q17.15 9.825 15.663 8.337Q14.175 6.85 12.025 6.85Q11.6 6.85 11.188 6.912Q10.775 6.975 10.375 7.1Q11.675 7.875 12.425 9.175Q13.175 10.475 13.175 11.975Q13.175 13.475 12.425 14.775Q11.675 16.075 10.375 16.85Q10.775 16.975 11.188 17.05Q11.6 17.125 12.025 17.125Z"/>
    </Icon>
  )
});

export default IconMaterialBrightness4OutlinedW700Filled;
