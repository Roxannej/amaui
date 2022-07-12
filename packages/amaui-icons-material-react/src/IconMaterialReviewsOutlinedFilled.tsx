import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReviewsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsOutlinedFilled'
      short_name='Reviews'

      {...props}
    >
      <path d="M12 15 13.55 11.55 17 10 13.55 8.45 12 5 10.45 8.45 7 10 10.45 11.55ZM2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6Z"/>
    </Icon>
  )
});

export default IconMaterialReviewsOutlinedFilled;
