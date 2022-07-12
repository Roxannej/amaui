import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchemaOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaOutlinedW700Filled'
      short_name='Schema'

      {...props}
    >
      <path d="M3.05 24.525V17H5.55V15.775H3.05V8.225H5.55V7H3.05V-0.525H11.375V7H8.875V8.225H11.375V10.425H13.625V8.225H21.95V15.775H13.625V13.575H11.375V15.775H8.875V17H11.375V24.525Z"/>
    </Icon>
  )
});

export default IconMaterialSchemaOutlinedW700Filled;