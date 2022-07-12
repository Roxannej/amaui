import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentCopyOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyOutlinedW700Filled'
      short_name='ContentCopy'

      {...props}
    >
      <path d="M9.875 18.275Q8.55 18.275 7.638 17.362Q6.725 16.45 6.725 15.125V3.725Q6.725 2.4 7.638 1.487Q8.55 0.575 9.875 0.575H18.275Q19.6 0.575 20.513 1.487Q21.425 2.4 21.425 3.725V15.125Q21.425 16.45 20.513 17.362Q19.6 18.275 18.275 18.275ZM4.725 23.425Q3.4 23.425 2.488 22.513Q1.575 21.6 1.575 20.275V6.575H4.725V20.275Q4.725 20.275 4.725 20.275Q4.725 20.275 4.725 20.275H15.425V23.425Z"/>
    </Icon>
  )
});

export default IconMaterialContentCopyOutlinedW700Filled;
