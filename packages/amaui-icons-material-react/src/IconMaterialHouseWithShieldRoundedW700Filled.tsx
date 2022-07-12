import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseWithShieldRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShieldRoundedW700Filled'
      short_name='HouseWithShield'

      {...props}
    >
      <path d="M8.75 12.575q0 1.6.812 2.937.813 1.338 2.188 1.913.2.05.375.088.175.037.375.037t.375-.037q.175-.038.375-.088 1.375-.575 2.188-1.913.812-1.337.812-2.937v-.95q0-.675-.35-1.238-.35-.562-.95-.862l-1.4-.7q-.5-.25-1.05-.25t-1.05.25l-1.4.7q-.6.3-.95.862-.35.563-.35 1.238ZM7.15 21.5q-1.325 0-2.238-.913Q4 19.675 4 18.35v-8.025q0-.75.325-1.413.325-.662.925-1.112l5.35-4q.85-.65 1.9-.65 1.05 0 1.9.65l5.35 4q.6.45.925 1.112.325.663.325 1.413v8.025q0 1.325-.913 2.237-.912.913-2.237.913Z"/>
    </Icon>
  )
});

export default IconMaterialHouseWithShieldRoundedW700Filled;