import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStyleOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StyleOutlinedW700Filled'
      short_name='Style'

      {...props}
    >
      <path d="M3.125 20.1 2.275 19.75Q1.5 19.425 1.238 18.625Q0.975 17.825 1.325 17.05L3.125 13.15ZM7.125 22.3Q6.3 22.3 5.713 21.712Q5.125 21.125 5.125 20.3V14.3L7.775 21.65Q7.85 21.825 7.925 21.987Q8 22.15 8.125 22.3ZM13.375 22.7Q12.25 23.125 11.175 22.613Q10.1 22.1 9.675 20.95L5.225 8.75Q4.8 7.625 5.288 6.55Q5.775 5.475 6.9 5.05L14.45 2.3Q15.575 1.9 16.663 2.4Q17.75 2.9 18.175 4.05L22.625 16.275Q23.025 17.4 22.513 18.462Q22 19.525 20.875 19.95ZM11.525 10.725Q12.1 10.725 12.513 10.325Q12.925 9.925 12.925 9.35Q12.925 8.775 12.513 8.362Q12.1 7.95 11.525 7.95Q10.95 7.95 10.55 8.362Q10.15 8.775 10.15 9.35Q10.15 9.925 10.55 10.325Q10.95 10.725 11.525 10.725Z"/>
    </Icon>
  )
});

export default IconMaterialStyleOutlinedW700Filled;
