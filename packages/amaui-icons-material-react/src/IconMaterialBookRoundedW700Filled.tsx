import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookRoundedW700Filled'
      short_name='Book'

      {...props}
    >
      <path d="M6.3 22.85Q4.975 22.85 4.062 21.938Q3.15 21.025 3.15 19.7V4.3Q3.15 2.975 4.062 2.062Q4.975 1.15 6.3 1.15H17.7Q19.025 1.15 19.938 2.062Q20.85 2.975 20.85 4.3V19.7Q20.85 21.025 19.938 21.938Q19.025 22.85 17.7 22.85ZM12.3 10.575 13.575 9.8 14.85 10.575Q15.25 10.825 15.662 10.587Q16.075 10.35 16.075 9.875V4.3H11.075V9.875Q11.075 10.35 11.488 10.587Q11.9 10.825 12.3 10.575Z"/>
    </Icon>
  )
});

export default IconMaterialBookRoundedW700Filled;
