import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapOutlinedW100'
      short_name='Map'

      {...props}
    >
      <path d="M15 19.6 9 17.5 5.25 18.95Q4.9 19.075 4.6 18.875Q4.3 18.675 4.3 18.3V6.6Q4.3 6.35 4.412 6.137Q4.525 5.925 4.75 5.85L9 4.4L15 6.5L18.75 5.05Q19.1 4.925 19.4 5.088Q19.7 5.25 19.7 5.6V17.5Q19.7 17.775 19.55 17.975Q19.4 18.175 19.15 18.25ZM14.65 18.75V7.05L9.35 5.2V16.9ZM15.35 18.75 19 17.55V5.7L15.35 7.05ZM5 18.3 8.65 16.9V5.2L5 6.45ZM15.35 7.05V18.75ZM8.65 5.2V16.9Z"/>
    </Icon>
  )
});

export default IconMaterialMapOutlinedW100;
