import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlinesRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlinesRoundedW700'
      short_name='Airlines'

      {...props}
    >
      <path d="M6.625 17.725H17.425L19.575 6.275H14.5ZM0.65 20.875 11.65 4.85Q12.225 4.025 13.1 3.575Q13.975 3.125 15 3.125H19.55Q21.05 3.125 21.988 4.262Q22.925 5.4 22.65 6.85L20.025 20.875ZM15.1 14Q16.15 14 16.875 13.275Q17.6 12.55 17.6 11.5Q17.6 10.45 16.875 9.725Q16.15 9 15.1 9Q14.05 9 13.325 9.725Q12.6 10.45 12.6 11.5Q12.6 12.55 13.325 13.275Q14.05 14 15.1 14ZM6.625 17.725H17.425Z"/>
    </Icon>
  )
});

export default IconMaterialAirlinesRoundedW700;
