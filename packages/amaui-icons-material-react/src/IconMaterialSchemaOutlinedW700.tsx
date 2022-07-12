import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchemaOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaOutlinedW700'
      short_name='Schema'

      {...props}
    >
      <path d="M3.05 24.525V17H5.55V15.775H3.05V8.225H5.55V7H3.05V-0.525H11.375V7H8.875V8.225H11.375V10.425H13.625V8.225H21.95V15.775H13.625V13.575H11.375V15.775H8.875V17H11.375V24.525ZM6.2 21.375H8.225V20.15H6.2ZM6.2 12.625H8.225V11.375H6.2ZM16.775 12.625H18.8V11.375H16.775ZM6.2 3.85H8.225V2.625H6.2ZM7.225 3.225ZM7.225 12ZM17.8 12ZM7.225 20.775Z"/>
    </Icon>
  )
});

export default IconMaterialSchemaOutlinedW700;
