import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoOutlinedW100Filled'
      short_name='Photo'

      {...props}
    >
      <path d="M7.95 16.35H16.25L13.7 12.95L11.2 16.05L9.6 14.2ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoOutlinedW100Filled;
