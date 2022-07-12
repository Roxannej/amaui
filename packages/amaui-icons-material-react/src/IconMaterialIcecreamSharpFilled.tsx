import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIcecreamSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IcecreamSharpFilled'
      short_name='Icecream'

      {...props}
    >
      <path d="M12.05 23 7.35 14Q5.575 14.075 4.287 12.975Q3 11.875 3 10Q3 8.725 3.738 7.7Q4.475 6.675 5.6 6.25Q6.05 3.975 7.838 2.487Q9.625 1 12 1Q14.375 1 16.163 2.487Q17.95 3.975 18.4 6.25Q19.525 6.675 20.263 7.7Q21 8.725 21 10Q21 11.875 19.675 12.975Q18.35 14.075 16.7 14ZM12.05 18.65 14.75 13.4Q14.15 13.7 13.45 13.85Q12.75 14 12 14Q11.325 14 10.638 13.85Q9.95 13.7 9.3 13.4Z"/>
    </Icon>
  )
});

export default IconMaterialIcecreamSharpFilled;
