import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBentoSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoSharpW700'
      short_name='Bento'

      {...props}
    >
      <path d="M1.425 19.575V4.425H22.575V19.575ZM14.575 10.425H19.425V7.575H14.575ZM4.575 16.425H11.425V7.575H4.575ZM8 14.075Q7.15 14.075 6.538 13.462Q5.925 12.85 5.925 12Q5.925 11.125 6.538 10.525Q7.15 9.925 8 9.925Q8.875 9.925 9.475 10.525Q10.075 11.125 10.075 12Q10.075 12.85 9.475 13.462Q8.875 14.075 8 14.075ZM14.575 16.425H19.425V13.575H14.575Z"/>
    </Icon>
  )
});

export default IconMaterialBentoSharpW700;
