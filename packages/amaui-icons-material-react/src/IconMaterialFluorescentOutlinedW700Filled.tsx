import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFluorescentOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluorescentOutlinedW700Filled'
      short_name='Fluorescent'

      {...props}
    >
      <path d="M4.15 15.9V8.2h15.7v7.7Zm6.475-11.675V.475h2.75v3.75Zm9.225 2.95L17.925 5.25l2.325-2.325 1.925 1.925Zm-9.225 16.35v-3.75h2.75v3.75Zm9.625-2.35-2.325-2.325 1.925-1.925 2.325 2.325Zm-16.1-14L1.825 4.85 3.75 2.925 6.075 5.25Zm-.4 14L1.825 19.25l2.325-2.325 1.925 1.925Z"/>
    </Icon>
  )
});

export default IconMaterialFluorescentOutlinedW700Filled;