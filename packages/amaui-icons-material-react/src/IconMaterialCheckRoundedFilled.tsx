import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckRoundedFilled'
      short_name='Check'

      {...props}
    >
      <path d="M9.55 17.575Q9.35 17.575 9.175 17.512Q9 17.45 8.85 17.3L4.55 13Q4.275 12.725 4.287 12.287Q4.3 11.85 4.575 11.575Q4.85 11.3 5.275 11.3Q5.7 11.3 5.975 11.575L9.55 15.15L18.025 6.675Q18.3 6.4 18.738 6.4Q19.175 6.4 19.45 6.675Q19.725 6.95 19.725 7.387Q19.725 7.825 19.45 8.1L10.25 17.3Q10.1 17.45 9.925 17.512Q9.75 17.575 9.55 17.575Z"/>
    </Icon>
  )
});

export default IconMaterialCheckRoundedFilled;
