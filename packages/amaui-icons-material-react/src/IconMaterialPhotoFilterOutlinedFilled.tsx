import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoFilterOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilterOutlinedFilled'
      short_name='PhotoFilter'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H14V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V10H21V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 16 10.75 13.25 8 12 10.75 10.75 12 8 13.25 10.75 16 12 13.25 13.25ZM17 10 16.05 7.95 14 7 16.05 6.05 17 4 17.95 6.05 20 7 17.95 7.95Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoFilterOutlinedFilled;
