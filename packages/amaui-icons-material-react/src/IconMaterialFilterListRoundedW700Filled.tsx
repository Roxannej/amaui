import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterListRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListRoundedW700Filled'
      short_name='FilterList'

      {...props}
    >
      <path d="M11 18.95Q10.35 18.95 9.888 18.487Q9.425 18.025 9.425 17.375Q9.425 16.725 9.888 16.262Q10.35 15.8 11 15.8H13Q13.65 15.8 14.113 16.262Q14.575 16.725 14.575 17.375Q14.575 18.025 14.113 18.487Q13.65 18.95 13 18.95ZM4 8.2Q3.35 8.2 2.888 7.737Q2.425 7.275 2.425 6.625Q2.425 5.975 2.888 5.512Q3.35 5.05 4 5.05H20Q20.65 5.05 21.113 5.512Q21.575 5.975 21.575 6.625Q21.575 7.275 21.113 7.737Q20.65 8.2 20 8.2ZM7 13.575Q6.35 13.575 5.888 13.112Q5.425 12.65 5.425 12Q5.425 11.35 5.888 10.887Q6.35 10.425 7 10.425H17Q17.65 10.425 18.113 10.887Q18.575 11.35 18.575 12Q18.575 12.65 18.113 13.112Q17.65 13.575 17 13.575Z"/>
    </Icon>
  )
});

export default IconMaterialFilterListRoundedW700Filled;
