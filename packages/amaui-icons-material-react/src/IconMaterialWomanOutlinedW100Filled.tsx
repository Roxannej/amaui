import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWomanOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WomanOutlinedW100Filled'
      short_name='Woman'

      {...props}
    >
      <path d="M10.2 21.35V15.2H7.5L10.25 8.275Q10.475 7.725 10.95 7.412Q11.425 7.1 12 7.1Q12.575 7.1 13.05 7.412Q13.525 7.725 13.75 8.275L16.5 15.2H13.8V21.35ZM12 5.75Q11.35 5.75 10.875 5.275Q10.4 4.8 10.4 4.15Q10.4 3.5 10.875 3.025Q11.35 2.55 12 2.55Q12.65 2.55 13.125 3.025Q13.6 3.5 13.6 4.15Q13.6 4.8 13.125 5.275Q12.65 5.75 12 5.75Z"/>
    </Icon>
  )
});

export default IconMaterialWomanOutlinedW100Filled;
