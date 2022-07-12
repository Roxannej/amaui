import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSharpW700'
      short_name='Event'

      {...props}
    >
      <path d="M14.5 18Q13.45 18 12.725 17.275Q12 16.55 12 15.5Q12 14.45 12.725 13.725Q13.45 13 14.5 13Q15.55 13 16.275 13.725Q17 14.45 17 15.5Q17 16.55 16.275 17.275Q15.55 18 14.5 18ZM2.15 22.85V3.15H6V1.15H8.575V3.15H15.425V1.15H18V3.15H21.85V22.85ZM5.3 19.7H18.7V10H5.3ZM5.3 8H18.7V6.3H5.3ZM5.3 8V6.3V8Z"/>
    </Icon>
  )
});

export default IconMaterialEventSharpW700;
