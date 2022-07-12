import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThermostatCarbonTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatCarbonTwoTone'
      short_name='ThermostatCarbon'

      {...props}
    >
      <path d="M14.125 21.575q-.875.9-2.113.9-1.237 0-2.137-.9l-7.45-7.45q-.9-.875-.9-2.125t.9-2.125L9.875 2.4q.875-.875 2.125-.875t2.125.875L21.6 9.875q.875.875.875 2.113 0 1.237-.875 2.137ZM12 19.425 19.45 12 12 4.55 4.575 12 12 19.425Z"/>
    </Icon>
  )
});

export default IconMaterialThermostatCarbonTwoTone;
