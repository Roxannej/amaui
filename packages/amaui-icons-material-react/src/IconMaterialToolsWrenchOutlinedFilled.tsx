import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsWrenchOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsWrenchOutlinedFilled'
      short_name='ToolsWrench'

      {...props}
    >
      <path d="m17.875 21.225-6.9-6.9q-.575.225-1.187.35-.613.125-1.263.125-2.725 0-4.612-1.888Q2.025 11.025 2.025 8.3q0-1.05.313-2.025.312-.975.912-1.8L7.075 8.3 8.5 6.9 4.675 3.05q.85-.625 1.825-.938.975-.312 2-.312 2.725 0 4.613 1.887Q15 5.575 15 8.3q0 .65-.125 1.287-.125.638-.375 1.213l6.875 6.875q.575.575.588 1.412.012.838-.563 1.413l-.675.7q-.575.6-1.413.612-.837.013-1.437-.587Z"/>
    </Icon>
  )
});

export default IconMaterialToolsWrenchOutlinedFilled;
