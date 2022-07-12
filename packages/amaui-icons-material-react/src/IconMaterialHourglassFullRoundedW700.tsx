import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassFullRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassFullRoundedW700'
      short_name='HourglassFull'

      {...props}
    >
      <path d="M4.725 22.85Q4.075 22.85 3.613 22.388Q3.15 21.925 3.15 21.275Q3.15 20.625 3.613 20.163Q4.075 19.7 4.725 19.7H5.15V17Q5.15 15.575 5.725 14.262Q6.3 12.95 7.35 12Q6.3 11.05 5.725 9.737Q5.15 8.425 5.15 7V4.3H4.725Q4.075 4.3 3.613 3.837Q3.15 3.375 3.15 2.725Q3.15 2.075 3.613 1.612Q4.075 1.15 4.725 1.15H19.275Q19.925 1.15 20.388 1.612Q20.85 2.075 20.85 2.725Q20.85 3.375 20.388 3.837Q19.925 4.3 19.275 4.3H18.85V7Q18.85 8.425 18.288 9.737Q17.725 11.05 16.65 12Q17.725 12.95 18.288 14.262Q18.85 15.575 18.85 17V19.7H19.275Q19.925 19.7 20.388 20.163Q20.85 20.625 20.85 21.275Q20.85 21.925 20.388 22.388Q19.925 22.85 19.275 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialHourglassFullRoundedW700;
