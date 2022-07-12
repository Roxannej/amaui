import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInputOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputOutlinedW700Filled'
      short_name='Input'

      {...props}
    >
      <path d="M1.15 13.575V10.425H11.075L9.375 8.725L11.575 6.5L17.075 12L11.575 17.5L9.375 15.275L11.075 13.575ZM4.3 15.575V18.075Q4.3 18.075 4.3 18.075Q4.3 18.075 4.3 18.075H19.7Q19.7 18.075 19.7 18.075Q19.7 18.075 19.7 18.075V5.925Q19.7 5.925 19.7 5.925Q19.7 5.925 19.7 5.925H4.3Q4.3 5.925 4.3 5.925Q4.3 5.925 4.3 5.925V8.425H1.15V5.925Q1.15 4.6 2.062 3.687Q2.975 2.775 4.3 2.775H19.7Q21.025 2.775 21.938 3.687Q22.85 4.6 22.85 5.925V18.075Q22.85 19.4 21.938 20.312Q21.025 21.225 19.7 21.225H4.3Q2.975 21.225 2.062 20.312Q1.15 19.4 1.15 18.075V15.575Z"/>
    </Icon>
  )
});

export default IconMaterialInputOutlinedW700Filled;
