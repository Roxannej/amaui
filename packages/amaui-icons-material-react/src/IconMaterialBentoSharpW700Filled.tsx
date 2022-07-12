import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBentoSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoSharpW700Filled'
      short_name='Bento'

      {...props}
    >
      <path d="M16.575 10.425V4.425H22.575V10.425ZM1.425 19.575V4.425H13.425V19.575ZM7.425 14.075Q8.3 14.075 8.9 13.462Q9.5 12.85 9.5 12Q9.5 11.125 8.9 10.525Q8.3 9.925 7.425 9.925Q6.575 9.925 5.963 10.525Q5.35 11.125 5.35 12Q5.35 12.85 5.963 13.462Q6.575 14.075 7.425 14.075ZM16.575 19.575V13.575H22.575V19.575Z"/>
    </Icon>
  )
});

export default IconMaterialBentoSharpW700Filled;
