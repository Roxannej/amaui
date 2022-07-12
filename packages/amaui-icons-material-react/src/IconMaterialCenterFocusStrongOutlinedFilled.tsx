import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCenterFocusStrongOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusStrongOutlinedFilled'
      short_name='CenterFocusStrong'

      {...props}
    >
      <path d="M12 17Q9.925 17 8.463 15.537Q7 14.075 7 12Q7 9.925 8.463 8.462Q9.925 7 12 7Q14.075 7 15.538 8.462Q17 9.925 17 12Q17 14.075 15.538 15.537Q14.075 17 12 17ZM3 9V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9V5H5Q5 5 5 5Q5 5 5 5V9ZM9 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V15H5V19Q5 19 5 19Q5 19 5 19H9ZM15 21V19H19Q19 19 19 19Q19 19 19 19V15H21V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM19 9V5Q19 5 19 5Q19 5 19 5H15V3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V9Z"/>
    </Icon>
  )
});

export default IconMaterialCenterFocusStrongOutlinedFilled;
