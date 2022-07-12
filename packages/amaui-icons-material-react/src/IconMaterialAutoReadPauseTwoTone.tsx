import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPauseTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPauseTwoTone'
      short_name='AutoReadPause'

      {...props}
    >
      <path d="M9.85 14.1Q10.325 14.1 10.663 13.762Q11 13.425 11 12.95V7.025Q11 6.575 10.663 6.237Q10.325 5.9 9.85 5.9Q9.4 5.9 9.075 6.237Q8.75 6.575 8.75 7.025V12.95Q8.75 13.425 9.075 13.762Q9.4 14.1 9.85 14.1ZM14.15 14.1Q14.6 14.1 14.938 13.762Q15.275 13.425 15.275 12.95V7.025Q15.275 6.575 14.938 6.237Q14.6 5.9 14.15 5.9Q13.7 5.9 13.363 6.237Q13.025 6.575 13.025 7.025V12.95Q13.025 13.425 13.35 13.762Q13.675 14.1 14.15 14.1ZM3.95 19.925Q3.25 20.625 2.325 20.25Q1.4 19.875 1.4 18.85V4.4Q1.4 3.125 2.275 2.25Q3.15 1.375 4.425 1.375H19.575Q20.85 1.375 21.725 2.25Q22.6 3.125 22.6 4.4V15.6Q22.6 16.875 21.725 17.75Q20.85 18.625 19.575 18.625H5.25Z"/>
    </Icon>
  )
});

export default IconMaterialAutoReadPauseTwoTone;
