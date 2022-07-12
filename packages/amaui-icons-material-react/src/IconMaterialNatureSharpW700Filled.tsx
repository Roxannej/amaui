import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNatureSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureSharpW700Filled'
      short_name='Nature'

      {...props}
    >
      <path d="M4.225 22.775V19.625H10.425V16.65H9Q6.575 16.65 4.863 14.938Q3.15 13.225 3.15 10.8Q3.15 9.15 3.988 7.762Q4.825 6.375 6.275 5.625Q6.675 3.6 8.288 2.287Q9.9 0.975 12 0.975Q14.1 0.975 15.713 2.287Q17.325 3.6 17.725 5.625Q19.175 6.375 20.013 7.762Q20.85 9.15 20.85 10.8Q20.85 13.225 19.138 14.938Q17.425 16.65 15 16.65H13.575V19.625H19.775V22.775Z"/>
    </Icon>
  )
});

export default IconMaterialNatureSharpW700Filled;
