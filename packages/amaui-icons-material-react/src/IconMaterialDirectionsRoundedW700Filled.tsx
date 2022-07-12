import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRoundedW700Filled'
      short_name='Directions'

      {...props}
    >
      <path d="M9.8 21.825 2.175 14.2Q1.225 13.25 1.225 12Q1.225 10.75 2.175 9.8L9.8 2.175Q10.75 1.225 12 1.225Q13.25 1.225 14.2 2.175L21.825 9.8Q22.775 10.75 22.775 12Q22.775 13.25 21.825 14.2L14.2 21.825Q13.25 22.775 12 22.775Q10.75 22.775 9.8 21.825ZM11.3 16.3Q11.575 16.575 12 16.575Q12.425 16.575 12.7 16.3L15.9 13.1Q16.15 12.85 16.25 12.575Q16.35 12.3 16.35 12Q16.35 11.7 16.25 11.425Q16.15 11.15 15.9 10.9L12.7 7.7Q12.425 7.425 12.013 7.412Q11.6 7.4 11.3 7.7Q11.025 7.975 11.012 8.387Q11 8.8 11.275 9.1L13.15 11H8Q7.575 11 7.287 11.287Q7 11.575 7 12Q7 12.425 7.287 12.712Q7.575 13 8 13H13.15L11.275 14.9Q11 15.175 11 15.587Q11 16 11.3 16.3Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsRoundedW700Filled;