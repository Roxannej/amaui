import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMemorySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemorySharpW700Filled'
      short_name='Memory'

      {...props}
    >
      <path d="M8.425 22.225V19.85H4.15V15.575H1.775V13.2H4.15V10.8H1.775V8.425H4.15V4.15H8.425V1.775H10.8V4.15H13.2V1.775H15.575V4.15H19.85V8.425H22.225V10.8H19.85V13.2H22.225V15.575H19.85V19.85H15.575V22.225H13.2V19.85H10.8V22.225ZM7.3 16.7H16.7V7.3H7.3ZM9 15V9H15V15ZM11 13H13V11H11ZM11 13V11H13V13Z"/>
    </Icon>
  )
});

export default IconMaterialMemorySharpW700Filled;
