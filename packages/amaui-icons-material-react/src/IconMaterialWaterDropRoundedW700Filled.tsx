import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDropRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropRoundedW700Filled'
      short_name='WaterDrop'

      {...props}
    >
      <path d="M12 22.85Q8.5 22.85 5.825 20.4Q3.15 17.95 3.15 13.8Q3.15 11.325 5.013 8.4Q6.875 5.475 10.675 2.05Q10.95 1.8 11.3 1.687Q11.65 1.575 12 1.575Q12.35 1.575 12.7 1.687Q13.05 1.8 13.325 2.05Q17.125 5.475 18.988 8.4Q20.85 11.325 20.85 13.8Q20.85 17.95 18.175 20.4Q15.5 22.85 12 22.85ZM12.35 18.875Q12.775 18.85 13.062 18.562Q13.35 18.275 13.35 17.875Q13.35 17.45 13.038 17.15Q12.725 16.85 12.275 16.875Q11.1 16.95 10.275 16.337Q9.45 15.725 9.175 14.45Q9.125 14.125 8.863 13.875Q8.6 13.625 8.175 13.625Q7.7 13.625 7.4 13.962Q7.1 14.3 7.2 14.75Q7.625 17.05 9.188 18.013Q10.75 18.975 12.35 18.875Z"/>
    </Icon>
  )
});

export default IconMaterialWaterDropRoundedW700Filled;
