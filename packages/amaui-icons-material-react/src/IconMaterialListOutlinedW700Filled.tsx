import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialListOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListOutlinedW700Filled'
      short_name='List'

      {...props}
    >
      <path d="M7.325 8.425V5.275H21.825V8.425ZM7.325 13.575V10.425H21.825V13.575ZM7.325 18.725V15.575H21.825V18.725ZM3.875 8.55Q3.175 8.55 2.675 8.05Q2.175 7.55 2.175 6.85Q2.175 6.15 2.675 5.65Q3.175 5.15 3.875 5.15Q4.575 5.15 5.062 5.65Q5.55 6.15 5.55 6.85Q5.55 7.55 5.062 8.05Q4.575 8.55 3.875 8.55ZM3.875 13.7Q3.175 13.7 2.675 13.2Q2.175 12.7 2.175 12Q2.175 11.3 2.675 10.8Q3.175 10.3 3.875 10.3Q4.575 10.3 5.062 10.8Q5.55 11.3 5.55 12Q5.55 12.7 5.062 13.2Q4.575 13.7 3.875 13.7ZM3.875 18.85Q3.175 18.85 2.675 18.35Q2.175 17.85 2.175 17.15Q2.175 16.45 2.675 15.95Q3.175 15.45 3.875 15.45Q4.575 15.45 5.062 15.95Q5.55 16.45 5.55 17.15Q5.55 17.85 5.062 18.35Q4.575 18.85 3.875 18.85Z"/>
    </Icon>
  )
});

export default IconMaterialListOutlinedW700Filled;