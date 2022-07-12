import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRateReviewOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewOutlinedFilled'
      short_name='RateReview'

      {...props}
    >
      <path d="M10.5 14H18V12H12.5ZM6 14H8.45L14.35 8.15Q14.5 8 14.5 7.775Q14.5 7.55 14.35 7.4L12.6 5.65Q12.45 5.5 12.225 5.5Q12 5.5 11.85 5.65L6 11.55ZM2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6Z"/>
    </Icon>
  )
});

export default IconMaterialRateReviewOutlinedFilled;
