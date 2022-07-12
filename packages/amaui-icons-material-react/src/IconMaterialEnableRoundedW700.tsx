import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEnableRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnableRoundedW700'
      short_name='Enable'

      {...props}
    >
      <path d="M12 16.8 6.2 11 8.4 8.8 10.425 10.825V1.55H13.575V10.825L15.6 8.8L17.8 11ZM12 22.575Q9.8 22.575 7.875 21.75Q5.95 20.925 4.513 19.488Q3.075 18.05 2.25 16.125Q1.425 14.2 1.425 12Q1.425 8.725 3.288 6Q5.15 3.275 8.425 2.05V5.075Q6.4 6.2 5.3 8Q4.2 9.8 4.2 12Q4.2 15.25 6.475 17.525Q8.75 19.8 12 19.8Q15.25 19.8 17.525 17.525Q19.8 15.25 19.8 12Q19.8 9.8 18.7 8Q17.6 6.2 15.575 5.075V2.05Q18.85 3.275 20.713 6Q22.575 8.725 22.575 12Q22.575 14.2 21.75 16.125Q20.925 18.05 19.488 19.488Q18.05 20.925 16.125 21.75Q14.2 22.575 12 22.575Z"/>
    </Icon>
  )
});

export default IconMaterialEnableRoundedW700;
