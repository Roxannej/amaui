import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllOutSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutSharpW700'
      short_name='AllOut'

      {...props}
    >
      <path d="M2.15 21.85V16H4.925V19.075H8V21.85ZM16 21.85V19.075H19.075V16H21.85V21.85ZM12 19Q9.1 19 7.05 16.95Q5 14.9 5 12Q5 9.1 7.05 7.05Q9.1 5 12 5Q14.9 5 16.95 7.05Q19 9.1 19 12Q19 14.9 16.95 16.95Q14.9 19 12 19ZM12.025 15.85Q13.6 15.85 14.725 14.712Q15.85 13.575 15.85 11.975Q15.85 10.4 14.725 9.275Q13.6 8.15 12 8.15Q10.425 8.15 9.288 9.275Q8.15 10.4 8.15 12Q8.15 13.575 9.288 14.712Q10.425 15.85 12.025 15.85ZM2.15 8V2.15H8V4.925H4.925V8ZM19.075 8V4.925H16V2.15H21.85V8ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialAllOutSharpW700;
