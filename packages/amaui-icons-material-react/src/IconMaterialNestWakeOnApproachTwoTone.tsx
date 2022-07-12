import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWakeOnApproachTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnApproachTwoTone'
      short_name='NestWakeOnApproach'

      {...props}
    >
      <path d="M20.5 11.6q-.85 0-1.425-.588-.575-.587-.575-1.437v-6q0-.825.575-1.413.575-.587 1.425-.587.85 0 1.438.587.587.588.587 1.413v6q0 .85-.587 1.437-.588.588-1.438.588Zm-10.5 0q-1.975 0-3.35-1.375t-1.375-3.35q0-2 1.375-3.35T10 2.175q2 0 3.363 1.35 1.362 1.35 1.362 3.35 0 1.975-1.362 3.35Q12 11.6 10 11.6Zm-8.625 9.35V17.4q0-1.05.55-1.925t1.475-1.35q1.6-.775 3.25-1.187 1.65-.413 3.35-.413 1.75 0 3.4.4t3.2 1.175q.925.45 1.475 1.325t.55 1.975v3.55Z"/>
    </Icon>
  )
});

export default IconMaterialNestWakeOnApproachTwoTone;