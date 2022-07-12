import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockRoundedW700Filled'
      short_name='Dock'

      {...props}
    >
      <path d="M8.625 23.375Q8.2 23.375 7.913 23.087Q7.625 22.8 7.625 22.375Q7.625 21.95 7.913 21.663Q8.2 21.375 8.625 21.375H15.375Q15.8 21.375 16.087 21.663Q16.375 21.95 16.375 22.375Q16.375 22.8 16.087 23.087Q15.8 23.375 15.375 23.375ZM8.775 19.375Q7.45 19.375 6.537 18.462Q5.625 17.55 5.625 16.225V3.775Q5.625 2.45 6.537 1.537Q7.45 0.625 8.775 0.625H15.225Q16.55 0.625 17.462 1.537Q18.375 2.45 18.375 3.775V16.225Q18.375 17.55 17.462 18.462Q16.55 19.375 15.225 19.375ZM8.775 13.225H15.225V6.775H8.775Z"/>
    </Icon>
  )
});

export default IconMaterialDockRoundedW700Filled;
