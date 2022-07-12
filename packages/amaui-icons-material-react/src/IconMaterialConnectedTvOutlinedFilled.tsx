import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConnectedTvOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTvOutlinedFilled'
      short_name='ConnectedTv'

      {...props}
    >
      <path d="M5 16H7Q7 15.175 6.412 14.587Q5.825 14 5 14ZM10 16Q10 13.925 8.537 12.462Q7.075 11 5 11V12.45Q6.475 12.45 7.513 13.488Q8.55 14.525 8.55 16ZM13 16Q13 14.35 12.375 12.887Q11.75 11.425 10.663 10.337Q9.575 9.25 8.113 8.625Q6.65 8 5 8V9.45Q7.725 9.45 9.638 11.362Q11.55 13.275 11.55 16ZM8 21V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H16V21Z"/>
    </Icon>
  )
});

export default IconMaterialConnectedTvOutlinedFilled;