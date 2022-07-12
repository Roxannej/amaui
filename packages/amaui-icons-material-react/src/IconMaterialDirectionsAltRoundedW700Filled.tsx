import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltRoundedW700Filled'
      short_name='DirectionsAlt'

      {...props}
    >
      <path d="M12 22.75q-.575 0-1.15-.225t-1.05-.7L2.175 14.2q-.475-.475-.7-1.05-.225-.575-.225-1.15 0-.6.225-1.163.225-.562.7-1.037L9.8 2.175q.475-.475 1.05-.713.575-.237 1.15-.237.6 0 1.163.237.562.238 1.037.713L21.825 9.8q.475.475.713 1.037.237.563.237 1.163 0 .575-.237 1.15-.238.575-.713 1.05L14.2 21.825q-.475.475-1.037.7-.563.225-1.163.225ZM13.15 13l-1.875 1.9q-.275.275-.275.687 0 .413.3.713.275.275.7.275.425 0 .7-.275l3.175-3.175q.475-.475.475-1.125t-.475-1.125L12.7 7.7q-.275-.275-.687-.288Q11.6 7.4 11.3 7.7q-.275.275-.288.687-.012.413.263.713L13.15 11H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltRoundedW700Filled;
