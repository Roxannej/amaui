import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesRoundedW700Filled'
      short_name='Devices'

      {...props}
    >
      <path d="M3.725 17V6Q3.725 4.7 4.65 3.775Q5.575 2.85 6.875 2.85H19.525Q20.175 2.85 20.638 3.312Q21.1 3.775 21.1 4.425Q21.1 5.075 20.638 5.537Q20.175 6 19.525 6H6.875Q6.875 6 6.875 6Q6.875 6 6.875 6V17H9.65Q10.525 17 11.125 17.6Q11.725 18.2 11.725 19.075Q11.725 19.95 11.125 20.55Q10.525 21.15 9.65 21.15H3.6Q2.725 21.15 2.125 20.55Q1.525 19.95 1.525 19.075Q1.525 18.2 2.125 17.6Q2.725 17 3.6 17ZM14.525 21.15Q14.025 21.15 13.675 20.8Q13.325 20.45 13.325 19.95V8.8Q13.325 8.3 13.638 7.962Q13.95 7.625 14.525 7.625H21.275Q21.85 7.625 22.163 7.962Q22.475 8.3 22.475 8.8V19.95Q22.475 20.45 22.125 20.8Q21.775 21.15 21.275 21.15ZM15.725 17H20.1V10H15.725Z"/>
    </Icon>
  )
});

export default IconMaterialDevicesRoundedW700Filled;
