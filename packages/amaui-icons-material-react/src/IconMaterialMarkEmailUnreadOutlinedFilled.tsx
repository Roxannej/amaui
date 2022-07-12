import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkEmailUnreadOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadOutlinedFilled'
      short_name='MarkEmailUnread'

      {...props}
    >
      <path d="M19 8Q17.75 8 16.875 7.125Q16 6.25 16 5Q16 3.75 16.875 2.875Q17.75 2 19 2Q20.25 2 21.125 2.875Q22 3.75 22 5Q22 6.25 21.125 7.125Q20.25 8 19 8ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H14.1Q14 4.5 14 5Q14 5.5 14.1 6Q14.275 6.8 14.675 7.487Q15.075 8.175 15.65 8.7L12 11L4 6V8L12 13L17.275 9.7Q17.7 9.85 18.125 9.925Q18.55 10 19 10Q19.8 10 20.575 9.75Q21.35 9.5 22 9V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialMarkEmailUnreadOutlinedFilled;
