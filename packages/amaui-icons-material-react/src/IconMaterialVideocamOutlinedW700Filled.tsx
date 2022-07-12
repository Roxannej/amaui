import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOutlinedW700Filled'
      short_name='Videocam'

      {...props}
    >
      <path d="M4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H15.7Q17.025 3.15 17.938 4.062Q18.85 4.975 18.85 6.3V10.5L22.85 6.5V17.5L18.85 13.5V17.7Q18.85 19.025 17.938 19.938Q17.025 20.85 15.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialVideocamOutlinedW700Filled;