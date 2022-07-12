import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoneyOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyOutlinedW700Filled'
      short_name='Money'

      {...props}
    >
      <path d="M15 16H18Q18.425 16 18.712 15.712Q19 15.425 19 15V9Q19 8.575 18.712 8.287Q18.425 8 18 8H15Q14.575 8 14.288 8.287Q14 8.575 14 9V15Q14 15.425 14.288 15.712Q14.575 16 15 16ZM16 14V10H17V14ZM9 16H12Q12.425 16 12.713 15.712Q13 15.425 13 15V9Q13 8.575 12.713 8.287Q12.425 8 12 8H9Q8.575 8 8.288 8.287Q8 8.575 8 9V15Q8 15.425 8.288 15.712Q8.575 16 9 16ZM10 14V10H11V14ZM5 16H7V8H5ZM0.85 21.15V2.85H23.15V21.15Z"/>
    </Icon>
  )
});

export default IconMaterialMoneyOutlinedW700Filled;
