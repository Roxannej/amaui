import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOutlinedW100'
      short_name='Directions'

      {...props}
    >
      <path d="M10.95 19.9 4.1 13.05Q3.65 12.6 3.65 12Q3.65 11.4 4.1 10.95L10.95 4.1Q11.4 3.65 12 3.65Q12.6 3.65 13.05 4.1L19.9 10.95Q20.35 11.4 20.35 12Q20.35 12.6 19.9 13.05L13.05 19.9Q12.6 20.35 12 20.35Q11.4 20.35 10.95 19.9ZM11.45 19.45Q11.675 19.675 12 19.675Q12.325 19.675 12.55 19.45L19.45 12.55Q19.675 12.325 19.675 12Q19.675 11.675 19.45 11.45L12.55 4.55Q12.325 4.325 12 4.325Q11.675 4.325 11.45 4.55L4.55 11.45Q4.325 11.675 4.325 12Q4.325 12.325 4.55 12.55ZM12 16.1 16.1 12 12 7.9 11.5 8.4 14.75 11.65H7.9V12.35H14.75L11.5 15.6ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsOutlinedW100;
