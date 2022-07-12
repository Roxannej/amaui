import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBentoOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoOutlinedW700Filled'
      short_name='Bento'

      {...props}
    >
      <path d="M16.575 10.425V4.425H19.425Q20.75 4.425 21.663 5.337Q22.575 6.25 22.575 7.575V10.425ZM4.575 19.575Q3.25 19.575 2.337 18.663Q1.425 17.75 1.425 16.425V7.575Q1.425 6.25 2.337 5.337Q3.25 4.425 4.575 4.425H13.425V19.575ZM7.425 14.075Q8.3 14.075 8.9 13.462Q9.5 12.85 9.5 12Q9.5 11.125 8.9 10.525Q8.3 9.925 7.425 9.925Q6.575 9.925 5.963 10.525Q5.35 11.125 5.35 12Q5.35 12.85 5.963 13.462Q6.575 14.075 7.425 14.075ZM16.575 19.575V13.575H22.575V16.425Q22.575 17.75 21.663 18.663Q20.75 19.575 19.425 19.575Z"/>
    </Icon>
  )
});

export default IconMaterialBentoOutlinedW700Filled;
