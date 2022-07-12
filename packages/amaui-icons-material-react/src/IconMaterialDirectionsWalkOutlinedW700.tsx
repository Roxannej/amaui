import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsWalkOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsWalkOutlinedW700'
      short_name='DirectionsWalk'

      {...props}
    >
      <path d="M13.8 5.125Q12.8 5.125 12.113 4.425Q11.425 3.725 11.425 2.725Q11.425 1.725 12.113 1.037Q12.8 0.35 13.8 0.35Q14.8 0.35 15.5 1.037Q16.2 1.725 16.2 2.725Q16.2 3.725 15.5 4.425Q14.8 5.125 13.8 5.125ZM6.55 23.375 9.3 9.425 8.125 9.9V13.375H5.35V8.025L10.9 5.8Q11.775 5.45 12.637 5.725Q13.5 6 14 6.8L15.05 8.4Q15.65 9.35 16.75 9.988Q17.85 10.625 19.375 10.625V13.375Q17.65 13.375 16.2 12.8Q14.75 12.225 13.725 11.275L13.325 13.375L15.375 15.35V23.375H12.625V17.15L11.1 15.725L9.375 23.375Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsWalkOutlinedW700;