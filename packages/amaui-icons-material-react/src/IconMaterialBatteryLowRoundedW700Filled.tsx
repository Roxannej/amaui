import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryLowRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryLowRoundedW700Filled'
      short_name='BatteryLow'

      {...props}
    >
      <path d="M23.15 16.45q0 .65-.462 1.112-.463.463-1.113.463H4.425q-.65 0-1.113-.463-.462-.462-.462-1.112v-1.875h-2v-5.15h2V7.55q0-.65.462-1.113.463-.462 1.113-.462h17.15q.65 0 1.113.462.462.463.462 1.113ZM17 14.875v-5.75H6v5.75Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryLowRoundedW700Filled;
