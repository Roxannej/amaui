import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationOffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffOutlinedFilled'
      short_name='LocationOff'

      {...props}
    >
      <path d="M20.475 23.3 15.675 18.5Q14.9 19.35 13.988 20.225Q13.075 21.1 12 22Q7.975 18.575 5.988 15.65Q4 12.725 4 10.2Q4 9.4 4.125 8.675Q4.25 7.95 4.475 7.3L0.675 3.5L2.1 2.075L21.9 21.875ZM18.2 15.325 13.775 10.9Q13.9 10.7 13.95 10.475Q14 10.25 14 10Q14 9.175 13.413 8.587Q12.825 8 12 8Q11.75 8 11.525 8.05Q11.3 8.1 11.1 8.225L6.775 3.9Q7.85 2.975 9.188 2.487Q10.525 2 12 2Q15.175 2 17.587 4.225Q20 6.45 20 10.2Q20 11.4 19.55 12.662Q19.1 13.925 18.2 15.325Z"/>
    </Icon>
  )
});

export default IconMaterialLocationOffOutlinedFilled;
