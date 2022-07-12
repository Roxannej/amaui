import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDatasetOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetOutlinedW700Filled'
      short_name='Dataset'

      {...props}
    >
      <path d="M5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85ZM6.8 11.2H11.2V6.8H6.8ZM12.8 11.2H17.2V6.8H12.8ZM6.8 17.2H11.2V12.8H6.8ZM12.8 17.2H17.2V12.8H12.8Z"/>
    </Icon>
  )
});

export default IconMaterialDatasetOutlinedW700Filled;