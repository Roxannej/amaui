import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMpOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpOutlinedW700Filled'
      short_name='Mp'

      {...props}
    >
      <path d="M13.425 15H14.925V13.5H16.925Q17.35 13.5 17.638 13.212Q17.925 12.925 17.925 12.5V10Q17.925 9.575 17.638 9.287Q17.35 9 16.925 9H13.425ZM14.925 12V10.5H16.425V12ZM6.075 15H7.575V10.5H8.575V13.5H10.075V10.5H11.075V15H12.575V10Q12.575 9.575 12.288 9.287Q12 9 11.575 9H7.075Q6.65 9 6.363 9.287Q6.075 9.575 6.075 10ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialMpOutlinedW700Filled;
