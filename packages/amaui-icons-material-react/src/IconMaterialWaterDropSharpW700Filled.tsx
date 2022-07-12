import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDropSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropSharpW700Filled'
      short_name='WaterDrop'

      {...props}
    >
      <path d="M12 22.85Q8.5 22.85 5.825 20.4Q3.15 17.95 3.15 13.8Q3.15 11.1 5.338 7.9Q7.525 4.7 12 0.9Q16.475 4.7 18.663 7.9Q20.85 11.1 20.85 13.8Q20.85 17.95 18.175 20.4Q15.5 22.85 12 22.85ZM12.35 18.875Q12.775 18.85 13.062 18.562Q13.35 18.275 13.35 17.875Q13.35 17.45 13.038 17.15Q12.725 16.85 12.275 16.875Q11.1 16.95 10.275 16.337Q9.45 15.725 9.175 14.45Q9.125 14.125 8.863 13.875Q8.6 13.625 8.175 13.625Q7.7 13.625 7.4 13.962Q7.1 14.3 7.2 14.75Q7.625 17.05 9.188 18.013Q10.75 18.975 12.35 18.875Z"/>
    </Icon>
  )
});

export default IconMaterialWaterDropSharpW700Filled;
