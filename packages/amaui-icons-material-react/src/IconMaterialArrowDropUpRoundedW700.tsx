import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropUpRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpRoundedW700'
      short_name='ArrowDropUp'

      {...props}
    >
      <path d="M9.45 14.575Q8.4 14.575 7.988 13.612Q7.575 12.65 8.325 11.9L10.925 9.3Q11.15 9.075 11.438 8.962Q11.725 8.85 12.025 8.85Q12.325 8.85 12.613 8.962Q12.9 9.075 13.125 9.3L15.725 11.9Q16.475 12.65 16.062 13.612Q15.65 14.575 14.6 14.575Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDropUpRoundedW700;
