import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsWrenchTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsWrenchTwoTone'
      short_name='ToolsWrench'

      {...props}
    >
      <path d="m19.275 19.8.7-.7L12 11.125q.475-.575.738-1.3Q13 9.1 13 8.3q0-1.875-1.312-3.175-1.313-1.3-3.188-1.3h-.25L11.325 6.9l-4.25 4.225L4 8.05v.275Q4 10.2 5.312 11.5q1.313 1.3 3.188 1.3.8 0 1.513-.263.712-.262 1.287-.737l7.975 8Zm-1.4 1.425-6.9-6.9q-.575.225-1.187.35-.613.125-1.263.125-2.725 0-4.612-1.888Q2.025 11.025 2.025 8.3q0-1.05.313-2.025.312-.975.912-1.8L7.075 8.3 8.5 6.9 4.675 3.05q.85-.625 1.825-.938.975-.312 2-.312 2.725 0 4.613 1.887Q15 5.575 15 8.3q0 .65-.125 1.287-.125.638-.375 1.213l6.875 6.875q.575.575.588 1.412.012.838-.563 1.413l-.675.7q-.575.6-1.413.612-.837.013-1.437-.587ZM9.2 9Z"/>
    </Icon>
  )
});

export default IconMaterialToolsWrenchTwoTone;
