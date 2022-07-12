import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChurchOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchOutlinedW700Filled'
      short_name='Church'

      {...props}
    >
      <path d="M1.425 23.525V14.375L5.425 12.6V9.4L10.425 6.9V5.375H8.425V2.225H10.425V0.225H13.575V2.225H15.575V5.375H13.575V6.9L18.575 9.4V12.6L22.575 14.375V23.525H14.675V20.425Q14.675 19.325 13.888 18.55Q13.1 17.775 12 17.775Q10.9 17.775 10.113 18.55Q9.325 19.325 9.325 20.425V23.525ZM12 14.275Q12.625 14.275 13.062 13.837Q13.5 13.4 13.5 12.775Q13.5 12.15 13.062 11.712Q12.625 11.275 12 11.275Q11.375 11.275 10.938 11.712Q10.5 12.15 10.5 12.775Q10.5 13.4 10.938 13.837Q11.375 14.275 12 14.275Z"/>
    </Icon>
  )
});

export default IconMaterialChurchOutlinedW700Filled;