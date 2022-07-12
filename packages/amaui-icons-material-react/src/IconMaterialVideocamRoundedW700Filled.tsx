import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamRoundedW700Filled'
      short_name='Videocam'

      {...props}
    >
      <path d="M4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H15.7Q17.025 3.15 17.938 4.062Q18.85 4.975 18.85 6.3V10.5L21.475 7.875Q21.85 7.5 22.35 7.7Q22.85 7.9 22.85 8.45V15.55Q22.85 16.1 22.35 16.3Q21.85 16.5 21.475 16.125L18.85 13.5V17.7Q18.85 19.025 17.938 19.938Q17.025 20.85 15.7 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialVideocamRoundedW700Filled;
