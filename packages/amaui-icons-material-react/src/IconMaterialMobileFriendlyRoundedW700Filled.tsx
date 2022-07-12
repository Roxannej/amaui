import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileFriendlyRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyRoundedW700Filled'
      short_name='MobileFriendly'

      {...props}
    >
      <path d="M15.95 15.45Q15.65 15.45 15.375 15.35Q15.1 15.25 14.85 15L12.35 12.525Q11.925 12.1 11.925 11.475Q11.925 10.85 12.35 10.425Q12.775 10 13.4 10Q14.025 10 14.45 10.425L15.95 11.925L20.25 7.625Q20.675 7.2 21.288 7.2Q21.9 7.2 22.325 7.625Q22.75 8.05 22.75 8.675Q22.75 9.3 22.325 9.725L17.05 15Q16.8 15.25 16.525 15.35Q16.25 15.45 15.95 15.45ZM6.375 23.775Q5.075 23.775 4.15 22.85Q3.225 21.925 3.225 20.625V3.375Q3.225 2.075 4.15 1.15Q5.075 0.225 6.375 0.225H15.625Q16.925 0.225 17.85 1.15Q18.775 2.075 18.775 3.375V7H15.625V6.375H6.375V17.625H15.625V17H18.775V20.625Q18.775 21.925 17.85 22.85Q16.925 23.775 15.625 23.775Z"/>
    </Icon>
  )
});

export default IconMaterialMobileFriendlyRoundedW700Filled;