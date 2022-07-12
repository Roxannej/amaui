import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTollSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollSharpW700Filled'
      short_name='Toll'

      {...props}
    >
      <path d="M14.925 20.85Q11.25 20.85 8.662 18.262Q6.075 15.675 6.075 12Q6.075 8.325 8.662 5.737Q11.25 3.15 14.925 3.15Q18.6 3.15 21.188 5.737Q23.775 8.325 23.775 12Q23.775 15.675 21.188 18.262Q18.6 20.85 14.925 20.85ZM6.075 20.6Q3.35 19.725 1.788 17.312Q0.225 14.9 0.225 12Q0.225 9.1 1.788 6.687Q3.35 4.275 6.075 3.4V6.725Q4.725 7.55 4.05 8.988Q3.375 10.425 3.375 12Q3.375 13.575 4.05 15Q4.725 16.425 6.075 17.275Z"/>
    </Icon>
  )
});

export default IconMaterialTollSharpW700Filled;
