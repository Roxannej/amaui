import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOutlinedW100Filled'
      short_name='Directions'

      {...props}
    >
      <path d="M12 16.1 16.1 12 12 7.9 11.5 8.4 14.75 11.65H7.9V12.35H14.75L11.5 15.6ZM10.95 19.9 4.1 13.05Q3.65 12.6 3.65 12Q3.65 11.4 4.1 10.95L10.95 4.1Q11.4 3.65 12 3.65Q12.6 3.65 13.05 4.1L19.9 10.95Q20.35 11.4 20.35 12Q20.35 12.6 19.9 13.05L13.05 19.9Q12.6 20.35 12 20.35Q11.4 20.35 10.95 19.9Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsOutlinedW100Filled;
