import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyOutlinedW700Filled'
      short_name='Emergency'

      {...props}
    >
      <path d="M10 22.85Q9.25 22.85 8.7 22.3Q8.15 21.75 8.15 21V18.65L6.125 19.825Q5.475 20.2 4.738 20Q4 19.8 3.625 19.15L1.625 15.7Q1.225 15.05 1.413 14.3Q1.6 13.55 2.275 13.175L4.325 12L2.275 10.825Q1.6 10.45 1.4 9.7Q1.2 8.95 1.625 8.3L3.625 4.85Q4 4.2 4.738 4Q5.475 3.8 6.125 4.175L8.15 5.35V3Q8.15 2.25 8.7 1.7Q9.25 1.15 10 1.15H14Q14.75 1.15 15.3 1.7Q15.85 2.25 15.85 3V5.35L17.875 4.175Q18.525 3.8 19.263 4Q20 4.2 20.375 4.85L22.375 8.3Q22.775 8.95 22.588 9.7Q22.4 10.45 21.725 10.825L19.675 12L21.725 13.175Q22.4 13.55 22.6 14.3Q22.8 15.05 22.375 15.7L20.375 19.15Q20 19.8 19.263 20Q18.525 20.2 17.875 19.825L15.85 18.65V21Q15.85 21.75 15.3 22.3Q14.75 22.85 14 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialEmergencyOutlinedW700Filled;
