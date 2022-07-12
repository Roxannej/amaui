import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCampingRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingRoundedW700Filled'
      short_name='Camping'

      {...props}
    >
      <path d="M1.675 21v-2.575q0-.5.162-.975.163-.475.463-.9l7.725-10.425L9.1 4.85q-.2-.275-.262-.575-.063-.3-.013-.6t.213-.563q.162-.262.412-.462.525-.4 1.163-.3.637.1 1.037.625l.35.5.35-.475q.4-.525 1.037-.625.638-.1 1.163.3t.625 1.037q.1.638-.3 1.163l-.9 1.25L21.7 16.55q.3.425.463.9.162.475.162.975V21q0 .65-.462 1.112-.463.463-1.113.463H3.25q-.65 0-1.112-.463-.463-.462-.463-1.112Zm6.95-1.575h6.725l-3.35-4.7Z"/>
    </Icon>
  )
});

export default IconMaterialCampingRoundedW700Filled;
