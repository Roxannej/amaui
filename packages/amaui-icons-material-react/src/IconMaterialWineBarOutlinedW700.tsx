import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWineBarOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarOutlinedW700'
      short_name='WineBar'

      {...props}
    >
      <path d="M6.65 22.35V19.2H10.425V15.75Q7.85 15.25 6.25 13.3Q4.65 11.35 4.65 9V1.65H19.35V9Q19.35 11.35 17.75 13.3Q16.15 15.25 13.575 15.75V19.2H17.35V22.35ZM12 12.8Q13.3 12.8 14.312 12.15Q15.325 11.5 15.75 10.575H8.25Q8.675 11.5 9.688 12.15Q10.7 12.8 12 12.8ZM7.8 7.425H16.2V4.8H7.8ZM12 12.8Q12 12.8 12 12.8Q12 12.8 12 12.8Q12 12.8 12 12.8Q12 12.8 12 12.8Z"/>
    </Icon>
  )
});

export default IconMaterialWineBarOutlinedW700;