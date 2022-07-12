import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsRunOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRunOutlinedW700'
      short_name='DirectionsRun'

      {...props}
    >
      <path d="M13.55 5.125Q12.55 5.125 11.85 4.425Q11.15 3.725 11.15 2.725Q11.15 1.725 11.85 1.037Q12.55 0.35 13.55 0.35Q14.55 0.35 15.238 1.037Q15.925 1.725 15.925 2.725Q15.925 3.725 15.238 4.425Q14.55 5.125 13.55 5.125ZM12.625 23.375V17.2L11.125 15.775L10.2 19.85L2.55 18.3L3.1 15.575L7.9 16.575L9.3 9.475L8.15 9.9V13.425H5.375V8.075L9.8 6.3Q10.75 5.925 11.188 5.787Q11.625 5.65 12 5.65Q12.65 5.65 13.15 6Q13.65 6.35 14 6.875L15.05 8.475Q15.65 9.425 16.75 10.037Q17.85 10.65 19.375 10.65V13.425Q17.65 13.425 16.2 12.837Q14.75 12.25 13.725 11.3L13.325 13.425L15.375 15.375V23.375Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsRunOutlinedW700;
