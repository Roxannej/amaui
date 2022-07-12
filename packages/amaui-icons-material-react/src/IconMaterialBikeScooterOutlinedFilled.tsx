import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBikeScooterOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeScooterOutlinedFilled'
      short_name='BikeScooter'

      {...props}
    >
      <path d="M10 21Q8.75 21 7.875 20.125Q7 19.25 7 18Q7 16.75 7.875 15.875Q8.75 15 10 15Q11.25 15 12.125 15.875Q13 16.75 13 18Q13 19.25 12.125 20.125Q11.25 21 10 21ZM0 19V17H4.1Q4.375 15.3 5.513 14.025Q6.65 12.75 8.3 12.25L6.85 6Q6.85 6 6.85 6Q6.85 6 6.85 6H3V4H6.85Q7.525 4 8.088 4.438Q8.65 4.875 8.8 5.55L10.75 14H10Q8.35 14 7.175 15.175Q6 16.35 6 18V19ZM19 18Q17.2 18 15.838 16.887Q14.475 15.775 14.1 14H11.75L11.3 12H14.1Q14.225 11.425 14.438 10.925Q14.65 10.425 15 10H10.85L10.4 8H16.05L14.95 5Q14.95 5 14.95 5Q14.95 5 14.95 5H12.35V3H14.95Q15.6 3 16.113 3.35Q16.625 3.7 16.85 4.3L18.2 7.95H19Q21.075 7.95 22.538 9.412Q24 10.875 24 12.95Q24 15.075 22.538 16.538Q21.075 18 19 18ZM18 13.35 19.9 12.65 18.9 10 17.05 10.7Z"/>
    </Icon>
  )
});

export default IconMaterialBikeScooterOutlinedFilled;
