import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthMediumTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthMediumTwoTone'
      short_name='TrailLengthMedium'

      {...props}
    >
      <path d="M6.675 17.5v-3.025h4.45q-.15-.25-.262-.487-.113-.238-.163-.488H4.5v-3.025h6.2q.05-.225.163-.475.112-.25.262-.5H6.5V6.475H16q2.3 0 3.913 1.612Q21.525 9.7 21.525 12q0 2.275-1.612 3.887Q18.3 17.5 16 17.5Zm-4.175 0v-3.025h3.25V17.5Z"/>
    </Icon>
  )
});

export default IconMaterialTrailLengthMediumTwoTone;
