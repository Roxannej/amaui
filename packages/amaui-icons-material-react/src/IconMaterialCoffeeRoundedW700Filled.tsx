import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCoffeeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeRoundedW700Filled'
      short_name='Coffee'

      {...props}
    >
      <path d="M9.925 18.275Q6.675 18.275 4.375 16Q2.075 13.725 2.075 10.5V4.425Q2.075 3.25 2.913 2.412Q3.75 1.575 4.925 1.575H18.5Q20.3 1.575 21.55 2.85Q22.8 4.125 22.8 5.925Q22.8 7.725 21.55 9Q20.3 10.275 18.5 10.275H17.775V10.5Q17.775 13.75 15.475 16.012Q13.175 18.275 9.925 18.275ZM5.225 7.125H14.625V4.725H5.225ZM17.775 7.125H18.5Q19 7.125 19.35 6.775Q19.7 6.425 19.7 5.925Q19.7 5.425 19.35 5.075Q19 4.725 18.5 4.725H17.775ZM3.65 22.425Q3 22.425 2.538 21.962Q2.075 21.5 2.075 20.85Q2.075 20.2 2.538 19.737Q3 19.275 3.65 19.275H18.125Q18.775 19.275 19.238 19.737Q19.7 20.2 19.7 20.85Q19.7 21.5 19.238 21.962Q18.775 22.425 18.125 22.425Z"/>
    </Icon>
  )
});

export default IconMaterialCoffeeRoundedW700Filled;