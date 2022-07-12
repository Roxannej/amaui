import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelRoundedW700Filled'
      short_name='Hotel'

      {...props}
    >
      <path d="M1.625 21.15Q1.05 21.15 0.638 20.75Q0.225 20.35 0.225 19.775V5.8Q0.225 5.225 0.638 4.825Q1.05 4.425 1.625 4.425Q2.2 4.425 2.6 4.825Q3 5.225 3 5.8V15H11.375V9.575Q11.375 8.275 12.3 7.35Q13.225 6.425 14.525 6.425H19Q20.975 6.425 22.375 7.825Q23.775 9.225 23.775 11.2V19.775Q23.775 20.35 23.363 20.75Q22.95 21.15 22.375 21.15Q21.8 21.15 21.4 20.75Q21 20.35 21 19.775V18.15H3V19.775Q3 20.35 2.6 20.75Q2.2 21.15 1.625 21.15ZM7.2 14.2Q5.8 14.2 4.8 13.2Q3.8 12.2 3.8 10.8Q3.8 9.4 4.8 8.412Q5.8 7.425 7.2 7.425Q8.6 7.425 9.588 8.412Q10.575 9.4 10.575 10.8Q10.575 12.2 9.588 13.2Q8.6 14.2 7.2 14.2Z"/>
    </Icon>
  )
});

export default IconMaterialHotelRoundedW700Filled;
