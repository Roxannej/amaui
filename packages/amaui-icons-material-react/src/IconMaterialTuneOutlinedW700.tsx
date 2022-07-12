import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTuneOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TuneOutlinedW700'
      short_name='Tune'

      {...props}
    >
      <path d="M2.425 19.775V17H9.2V19.775ZM2.425 7V4.225H13.2V7ZM10.8 21.775V15H13.575V17H21.575V19.775H13.575V21.775ZM6.425 15.375V13.375H2.425V10.625H6.425V8.625H9.2V15.375ZM10.8 13.375V10.625H21.575V13.375ZM14.8 9V2.225H17.575V4.225H21.575V7H17.575V9Z"/>
    </Icon>
  )
});

export default IconMaterialTuneOutlinedW700;
