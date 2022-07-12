import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStairsRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsRoundedW700Filled'
      short_name='Stairs'

      {...props}
    >
      <path d="M7 18H10.425V14.675H13V11.35H15.575V8H17Q17.425 8 17.712 7.713Q18 7.425 18 7Q18 6.575 17.712 6.287Q17.425 6 17 6H13.575V9.325H11V12.65H8.425V16H7Q6.575 16 6.287 16.288Q6 16.575 6 17Q6 17.425 6.287 17.712Q6.575 18 7 18ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialStairsRoundedW700Filled;
