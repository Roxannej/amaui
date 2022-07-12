import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOutlinedW700Filled'
      short_name='Directions'

      {...props}
    >
      <path d="M12 17 17 12 12 7 10.6 8.4 13.15 11H7V13H13.15L10.6 15.6ZM9.8 21.825 2.175 14.2Q1.225 13.25 1.225 12Q1.225 10.75 2.175 9.8L9.8 2.175Q10.75 1.225 12 1.225Q13.25 1.225 14.2 2.175L21.825 9.8Q22.775 10.75 22.775 12Q22.775 13.25 21.825 14.2L14.2 21.825Q13.25 22.775 12 22.775Q10.75 22.775 9.8 21.825Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsOutlinedW700Filled;
