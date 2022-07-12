import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolcanoOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoOutlinedW700'
      short_name='Volcano'

      {...props}
    >
      <path d="M0.8 23.525 5.5 13H8.475L10.475 8H18.575L23.025 23.525ZM5.075 20.775H19.35L16.5 10.775H12.35L10.35 15.775H7.3ZM13 5V0.225H15.775V5ZM18.475 7.05 16.55 5.1 19.9 1.75 21.875 3.675ZM10.275 7.05 6.925 3.675 8.85 1.725 12.225 5.1ZM19.35 20.775H5.075H7.3H10.35H12.35H16.5Z"/>
    </Icon>
  )
});

export default IconMaterialVolcanoOutlinedW700;