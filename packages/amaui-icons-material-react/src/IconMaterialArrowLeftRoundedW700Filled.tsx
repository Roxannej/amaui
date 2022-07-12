import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowLeftRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftRoundedW700Filled'
      short_name='ArrowLeft'

      {...props}
    >
      <path d="M11.9 15.7 9.3 13.1Q9.075 12.875 8.963 12.587Q8.85 12.3 8.85 12Q8.85 11.7 8.963 11.412Q9.075 11.125 9.3 10.9L11.9 8.3Q12.65 7.55 13.613 7.963Q14.575 8.375 14.575 9.425V14.575Q14.575 15.625 13.613 16.038Q12.65 16.45 11.9 15.7Z"/>
    </Icon>
  )
});

export default IconMaterialArrowLeftRoundedW700Filled;