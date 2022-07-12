import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeatPumpBalanceOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalanceOutlinedFilled'
      short_name='HeatPumpBalance'

      {...props}
    >
      <path d="M7 18.6q1.25 0 2.125-.875T10 15.6v-6q0-.425.288-.713.287-.287.712-.287t.713.287Q12 9.175 12 9.6v6q0 1.25.875 2.125T15 18.6q1.25 0 2.125-.875T18 15.6v-7q0-.425.288-.713.287-.287.712-.287h1.175L19 8.75l1.4 1.425L24 6.6 20.4 3 19 4.425 20.175 5.6H19q-1.25 0-2.125.875T16 8.6v7q0 .425-.287.712-.288.288-.713.288t-.712-.288Q14 16.025 14 15.6v-6q0-1.25-.875-2.125T11 6.6q-1.25 0-2.125.875T8 9.6v6q0 .425-.287.712-.288.288-.713.288t-.713-.288Q6 16.025 6 15.6v-9H4v9q0 1.25.875 2.125T7 18.6Zm-4 3q-.825 0-1.412-.587Q1 20.425 1 19.6v-8h22v8q0 .825-.587 1.413-.588.587-1.413.587Z"/>
    </Icon>
  )
});

export default IconMaterialHeatPumpBalanceOutlinedFilled;
