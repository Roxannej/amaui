import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSortRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortRoundedW700Filled'
      short_name='Sort'

      {...props}
    >
      <path d="M8 18.95H4Q3.35 18.95 2.888 18.487Q2.425 18.025 2.425 17.375Q2.425 16.725 2.888 16.262Q3.35 15.8 4 15.8H8Q8.65 15.8 9.113 16.262Q9.575 16.725 9.575 17.375Q9.575 18.025 9.113 18.487Q8.65 18.95 8 18.95ZM20 8.2H4Q3.35 8.2 2.888 7.737Q2.425 7.275 2.425 6.625Q2.425 5.975 2.888 5.512Q3.35 5.05 4 5.05H20Q20.65 5.05 21.113 5.512Q21.575 5.975 21.575 6.625Q21.575 7.275 21.113 7.737Q20.65 8.2 20 8.2ZM14 13.575H4Q3.35 13.575 2.888 13.112Q2.425 12.65 2.425 12Q2.425 11.35 2.888 10.887Q3.35 10.425 4 10.425H14Q14.65 10.425 15.113 10.887Q15.575 11.35 15.575 12Q15.575 12.65 15.113 13.112Q14.65 13.575 14 13.575Z"/>
    </Icon>
  )
});

export default IconMaterialSortRoundedW700Filled;
