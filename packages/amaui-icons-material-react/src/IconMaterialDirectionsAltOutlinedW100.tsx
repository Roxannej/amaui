import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOutlinedW100'
      short_name='DirectionsAlt'

      {...props}
    >
      <path d="M12 20.35q-.275 0-.55-.112-.275-.113-.5-.338L4.1 13.05q-.225-.225-.337-.5-.113-.275-.113-.55t.113-.55q.112-.275.337-.5l6.85-6.85q.225-.225.5-.338.275-.112.55-.112t.55.112q.275.113.5.338l6.85 6.85q.225.225.338.5.112.275.112.55t-.112.55q-.113.275-.338.5l-6.85 6.85q-.225.225-.5.338-.275.112-.55.112ZM8 16l3.45 3.45q.225.225.55.225.325 0 .55-.225l6.9-6.9q.225-.225.225-.55 0-.325-.225-.55l-6.9-6.9q-.225-.225-.55-.225-.325 0-.55.225l-6.9 6.9q-.225.225-.225.55 0 .325.225.55Zm4 .1 4.1-4.1L12 7.9l-.5.5 3.25 3.25H7.9v.7h6.85L11.5 15.6Zm0-4.1Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltOutlinedW100;
