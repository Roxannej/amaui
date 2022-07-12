import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCampingTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingTwoTone'
      short_name='Camping'

      {...props}
    >
      <path d="M1.75 21v-2.6q0-.475.15-.938.15-.462.45-.862L10.1 6.125 9.15 4.8q-.175-.25-.238-.538-.062-.287-.012-.575.05-.287.2-.55.15-.262.4-.437.475-.4 1.1-.288.625.113 1 .588l.4.575.4-.55q.4-.475 1.013-.588.612-.112 1.112.288.475.375.575 1 .1.625-.275 1.1l-.925 1.3L21.675 16.6q.275.4.438.862.162.463.162.938V21q0 .6-.45 1.05-.45.45-1.075.45H3.25q-.6 0-1.05-.45-.45-.45-.45-1.05Zm6.85-1.525h6.8l-3.4-4.75Z"/>
    </Icon>
  )
});

export default IconMaterialCampingTwoTone;
