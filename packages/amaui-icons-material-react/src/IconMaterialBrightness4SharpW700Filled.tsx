import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness4SharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4SharpW700Filled'
      short_name='Brightness4'

      {...props}
    >
      <path d="M12.45 16.425Q14.3 16.425 15.588 15.137Q16.875 13.85 16.875 12Q16.875 10.15 15.588 8.862Q14.3 7.575 12.45 7.575Q12.1 7.575 11.75 7.637Q11.4 7.7 11.05 7.8Q12.175 8.45 12.812 9.575Q13.45 10.7 13.45 12Q13.45 13.3 12.812 14.425Q12.175 15.55 11.05 16.2Q11.4 16.3 11.75 16.363Q12.1 16.425 12.45 16.425ZM12 23.675 8.525 20.275H3.725V15.475L0.325 12L3.725 8.525V3.7H8.525L12 0.275L15.475 3.7H20.3V8.525L23.725 12L20.3 15.475V20.275H15.475Z"/>
    </Icon>
  )
});

export default IconMaterialBrightness4SharpW700Filled;
