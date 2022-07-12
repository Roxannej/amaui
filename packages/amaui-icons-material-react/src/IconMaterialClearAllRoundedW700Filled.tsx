import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClearAllRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllRoundedW700Filled'
      short_name='ClearAll'

      {...props}
    >
      <path d="M18 13.575H6Q5.35 13.575 4.888 13.112Q4.425 12.65 4.425 12Q4.425 11.35 4.888 10.887Q5.35 10.425 6 10.425H18Q18.65 10.425 19.113 10.887Q19.575 11.35 19.575 12Q19.575 12.65 19.113 13.112Q18.65 13.575 18 13.575ZM15.625 18.725H3.625Q2.975 18.725 2.513 18.263Q2.05 17.8 2.05 17.15Q2.05 16.5 2.513 16.038Q2.975 15.575 3.625 15.575H15.625Q16.275 15.575 16.738 16.038Q17.2 16.5 17.2 17.15Q17.2 17.8 16.738 18.263Q16.275 18.725 15.625 18.725ZM20.375 8.425H8.375Q7.725 8.425 7.263 7.962Q6.8 7.5 6.8 6.85Q6.8 6.2 7.263 5.737Q7.725 5.275 8.375 5.275H20.375Q21.025 5.275 21.488 5.737Q21.95 6.2 21.95 6.85Q21.95 7.5 21.488 7.962Q21.025 8.425 20.375 8.425Z"/>
    </Icon>
  )
});

export default IconMaterialClearAllRoundedW700Filled;
