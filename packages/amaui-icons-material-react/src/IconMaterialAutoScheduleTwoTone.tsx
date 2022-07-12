import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoScheduleTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoScheduleTwoTone'
      short_name='AutoSchedule'

      {...props}
    >
      <path d="m12.025 19.125-1.375-3L7.675 14.8l2.975-1.35 1.375-2.975 1.35 2.975 2.95 1.35-2.95 1.35ZM5.4 22.6q-1.275 0-2.15-.875t-.875-2.15v-13.2q0-1.275.875-2.15T5.4 3.35h.825v-2h2.45v2h6.65v-2h2.45v2h.825q1.275 0 2.15.875t.875 2.15v13.2q0 1.275-.875 2.15t-2.15.875Zm0-3.025h13.2V10.05H5.4v9.525Z"/>
    </Icon>
  )
});

export default IconMaterialAutoScheduleTwoTone;