import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlatwareOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlatwareOutlinedW700Filled'
      short_name='Flatware'

      {...props}
    >
      <path d="M11.55 21.375V11.125Q10.5 10.55 10.025 9.438Q9.55 8.325 9.55 7.1Q9.55 5.35 10.45 3.987Q11.35 2.625 12.925 2.625Q14.5 2.625 15.4 3.987Q16.3 5.35 16.3 7.1Q16.3 8.325 15.825 9.438Q15.35 10.55 14.3 11.125V21.375ZM17.5 21.375V2.625Q19.45 2.625 20.863 3.875Q22.275 5.125 22.275 7V13.375H20.275V21.375ZM3.775 21.375V11.35Q2.9 11.2 2.312 10.537Q1.725 9.875 1.725 9V3.425Q1.725 3.075 1.963 2.85Q2.2 2.625 2.55 2.625Q2.9 2.625 3.138 2.85Q3.375 3.075 3.375 3.425V7H4.35V3.425Q4.35 3.075 4.575 2.85Q4.8 2.625 5.15 2.625Q5.5 2.625 5.738 2.85Q5.975 3.075 5.975 3.425V7H6.95V3.425Q6.95 3.075 7.188 2.85Q7.425 2.625 7.775 2.625Q8.125 2.625 8.35 2.85Q8.575 3.075 8.575 3.425V9Q8.575 9.875 8 10.537Q7.425 11.2 6.55 11.35V21.375Z"/>
    </Icon>
  )
});

export default IconMaterialFlatwareOutlinedW700Filled;
