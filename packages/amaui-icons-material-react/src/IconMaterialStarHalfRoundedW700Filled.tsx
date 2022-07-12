import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarHalfRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfRoundedW700Filled'
      short_name='StarHalf'

      {...props}
    >
      <path d="M14.4 16.65 13.5 13.6 15.75 12H12.95L12 8.9V14.8ZM8.85 20.325Q7.925 21.025 6.988 20.362Q6.05 19.7 6.4 18.6L7.625 14.625L4.55 12.45Q3.6 11.775 3.95 10.675Q4.3 9.575 5.45 9.575H9.225L10.5 5.4Q10.675 4.825 11.1 4.55Q11.525 4.275 12 4.275Q12.475 4.275 12.9 4.55Q13.325 4.825 13.5 5.4L14.775 9.575H18.55Q19.7 9.575 20.05 10.675Q20.4 11.775 19.45 12.45L16.375 14.625L17.6 18.575Q17.95 19.675 17.012 20.337Q16.075 21 15.15 20.3L12.025 17.925Z"/>
    </Icon>
  )
});

export default IconMaterialStarHalfRoundedW700Filled;
