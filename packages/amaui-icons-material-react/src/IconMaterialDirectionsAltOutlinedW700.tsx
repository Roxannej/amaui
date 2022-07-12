import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOutlinedW700'
      short_name='DirectionsAlt'

      {...props}
    >
      <path d="M12 22.75q-.575 0-1.15-.225t-1.05-.7L2.175 14.2q-.475-.475-.7-1.05-.225-.575-.225-1.15 0-.6.225-1.163.225-.562.7-1.037L9.8 2.175q.475-.475 1.05-.713.575-.237 1.15-.237.6 0 1.163.237.562.238 1.037.713L21.825 9.8q.475.475.713 1.037.237.563.237 1.163 0 .575-.237 1.15-.238.575-.713 1.05L14.2 21.825q-.475.475-1.037.7-.563.225-1.163.225Zm-3.775-6.975 3.775 3.8L19.575 12 12 4.425 4.425 12ZM12 17l5-5-5-5-1.4 1.4 2.55 2.6H7v2h6.15l-2.55 2.6Zm0-5Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltOutlinedW700;