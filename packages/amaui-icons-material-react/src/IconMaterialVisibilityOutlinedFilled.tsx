import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVisibilityOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityOutlinedFilled'
      short_name='Visibility'

      {...props}
    >
      <path d="M12 16Q13.875 16 15.188 14.688Q16.5 13.375 16.5 11.5Q16.5 9.625 15.188 8.312Q13.875 7 12 7Q10.125 7 8.812 8.312Q7.5 9.625 7.5 11.5Q7.5 13.375 8.812 14.688Q10.125 16 12 16ZM12 14.2Q10.875 14.2 10.088 13.412Q9.3 12.625 9.3 11.5Q9.3 10.375 10.088 9.587Q10.875 8.8 12 8.8Q13.125 8.8 13.913 9.587Q14.7 10.375 14.7 11.5Q14.7 12.625 13.913 13.412Q13.125 14.2 12 14.2ZM12 19Q8.35 19 5.35 16.962Q2.35 14.925 1 11.5Q2.35 8.075 5.35 6.037Q8.35 4 12 4Q15.65 4 18.65 6.037Q21.65 8.075 23 11.5Q21.65 14.925 18.65 16.962Q15.65 19 12 19Z"/>
    </Icon>
  )
});

export default IconMaterialVisibilityOutlinedFilled;
