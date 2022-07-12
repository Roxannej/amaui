import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPergolaSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PergolaSharpW700Filled'
      short_name='Pergola'

      {...props}
    >
      <path d="M2.05 21.95V1.85q0-.6.425-1.088Q2.9.275 3.625.275q.725 0 1.15.487.425.488.425 1.088v.8h13.6v-.8q0-.6.5-1.088.5-.487 1.075-.487.6 0 1.088.487.487.488.487 1.088v20.1H18.8v-11H5.2v11Zm8.375 0v-2.6h-3V16.2h9.15v3.15h-3v2.6Z"/>
    </Icon>
  )
});

export default IconMaterialPergolaSharpW700Filled;
