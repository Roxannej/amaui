import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareOutlinedW700'
      short_name='Hardware'

      {...props}
    >
      <path d="M9.725 22.225Q9.075 22.225 8.613 21.763Q8.15 21.3 8.15 20.65V8.85H3.15Q3.15 5.9 5.213 3.837Q7.275 1.775 10.225 1.775H15.85V4.775L18.85 1.775H20.85V11.45H18.85L15.85 8.45V20.65Q15.85 21.3 15.388 21.763Q14.925 22.225 14.275 22.225ZM11.3 19.075H12.7V13.575H12H11.3ZM11.3 10.425H12.7V4.925H10.225Q9.6 4.925 9.013 5.1Q8.425 5.275 7.95 5.7H11.3ZM12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialHardwareOutlinedW700;
