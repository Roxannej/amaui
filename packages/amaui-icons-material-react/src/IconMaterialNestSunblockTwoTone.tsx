import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestSunblockTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestSunblockTwoTone'
      short_name='NestSunblock'

      {...props}
    >
      <path d="M1.425 6.35V2.325H4.45V6.35Zm0 15.3v-4.025H4.45v4.025ZM8.25 8.9 6.1 6.75l2.85-2.875 2.175 2.175Zm.7 11.2L6.1 17.25l2.15-2.175 2.875 2.875Zm-.625-6.6v-3.025H13.8l-1.475-2 2.425-1.8 3.275 4.4q.55.775.138 1.6-.413.825-1.338.825Zm13.6 6q-.85 0-1.425-.575-.575-.575-.575-1.425v-11q0-.85.575-1.438.575-.587 1.425-.587.85 0 1.438.587.587.588.587 1.438v11q0 .85-.587 1.425-.588.575-1.438.575Zm-20.5-3v-3.025q.6 0 1.05-.438.45-.437.45-1.037 0-.6-.45-1.05-.45-.45-1.05-.45V7.475q1.875 0 3.2 1.325Q5.95 10.125 5.95 12q0 1.875-1.325 3.188Q3.3 16.5 1.425 16.5Z"/>
    </Icon>
  )
});

export default IconMaterialNestSunblockTwoTone;