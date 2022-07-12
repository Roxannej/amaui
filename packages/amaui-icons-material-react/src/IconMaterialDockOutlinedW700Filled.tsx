import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockOutlinedW700Filled'
      short_name='Dock'

      {...props}
    >
      <path d="M8.775 19.375Q7.45 19.375 6.537 18.462Q5.625 17.55 5.625 16.225V3.775Q5.625 2.45 6.537 1.537Q7.45 0.625 8.775 0.625H15.225Q16.55 0.625 17.462 1.537Q18.375 2.45 18.375 3.775V16.225Q18.375 17.55 17.462 18.462Q16.55 19.375 15.225 19.375ZM15.225 6.775H8.775V13.225H15.225ZM7.625 23.375V21.375H16.375V23.375Z"/>
    </Icon>
  )
});

export default IconMaterialDockOutlinedW700Filled;
