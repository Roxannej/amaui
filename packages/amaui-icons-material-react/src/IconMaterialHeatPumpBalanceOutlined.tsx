import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeatPumpBalanceOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalanceOutlined'
      short_name='HeatPumpBalance'

      {...props}
    >
      <path d="M7 18.6q-1.25 0-2.125-.875T4 15.6v-9h2v9q0 .425.287.712.288.288.713.288t.713-.288Q8 16.025 8 15.6v-6q0-1.25.875-2.125T11 6.6q1.25 0 2.125.875T14 9.6v6q0 .425.288.712.287.288.712.288t.713-.288Q16 16.025 16 15.6v-7q0-1.25.875-2.125T19 5.6h1.175L19 4.425 20.4 3 24 6.6l-3.6 3.575L19 8.75l1.175-1.15H19q-.425 0-.712.287Q18 8.175 18 8.6v7q0 1.25-.875 2.125T15 18.6q-1.25 0-2.125-.875T12 15.6v-6q0-.425-.287-.713Q11.425 8.6 11 8.6t-.712.287Q10 9.175 10 9.6v6q0 1.25-.875 2.125T7 18.6Zm-4 3q-.825 0-1.412-.587Q1 20.425 1 19.6v-8h22v8q0 .825-.587 1.413-.588.587-1.413.587Zm0-2h18v-6H3v6Zm18-6H3Z"/>
    </Icon>
  )
});

export default IconMaterialHeatPumpBalanceOutlined;