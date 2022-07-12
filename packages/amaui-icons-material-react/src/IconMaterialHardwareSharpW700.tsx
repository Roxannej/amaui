import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareSharpW700'
      short_name='Hardware'

      {...props}
    >
      <path d="M8.15 22.225V8.85H3.15Q3.15 5.9 5.213 3.837Q7.275 1.775 10.225 1.775H15.85V4.775L18.85 1.775H20.85V11.45H18.85L15.85 8.45V22.225ZM12.7 12ZM11.3 19.075H12.7V13.575H11.3ZM11.3 10.425H12.7V4.925H10.225Q9.6 4.925 9.013 5.1Q8.425 5.275 7.95 5.7H11.3ZM12.7 10.425V5.7Q12.7 5.275 12.7 5.1Q12.7 4.925 12.7 4.925V10.425ZM12.7 19.075V13.575V19.075Z"/>
    </Icon>
  )
});

export default IconMaterialHardwareSharpW700;
