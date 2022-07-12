import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightRoundedW700Filled'
      short_name='ArrowRight'

      {...props}
    >
      <path d="M12.1 15.7Q11.35 16.45 10.388 16.038Q9.425 15.625 9.425 14.575V9.425Q9.425 8.375 10.388 7.963Q11.35 7.55 12.1 8.3L14.7 10.9Q14.925 11.125 15.038 11.412Q15.15 11.7 15.15 12Q15.15 12.3 15.038 12.587Q14.925 12.875 14.7 13.1Z"/>
    </Icon>
  )
});

export default IconMaterialArrowRightRoundedW700Filled;
