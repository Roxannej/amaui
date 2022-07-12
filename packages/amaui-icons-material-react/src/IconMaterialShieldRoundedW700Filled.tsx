import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldRoundedW700Filled'
      short_name='Shield'

      {...props}
    >
      <path d="M12 22.775Q11.775 22.775 11.575 22.737Q11.375 22.7 11.225 22.65Q7.675 21.475 5.413 18.225Q3.15 14.975 3.15 11.1V6.6Q3.15 5.625 3.713 4.812Q4.275 4 5.2 3.65L10.9 1.525Q11.45 1.325 12 1.325Q12.55 1.325 13.1 1.525L18.8 3.65Q19.725 4 20.288 4.812Q20.85 5.625 20.85 6.6V11.1Q20.85 14.975 18.587 18.225Q16.325 21.475 12.775 22.65Q12.7 22.675 12 22.775Z"/>
    </Icon>
  )
});

export default IconMaterialShieldRoundedW700Filled;
