import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwipeSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeSharpW700Filled'
      short_name='Swipe'

      {...props}
    >
      <path d="M1.625 7.375V1.625H3.875V3.225Q5.65 1.95 7.725 1.287Q9.8 0.625 12 0.625Q14.2 0.625 16.275 1.287Q18.35 1.95 20.125 3.225V1.625H22.375V7.375H16.625V5.125H18.8Q17.3 4.05 15.575 3.462Q13.85 2.875 12 2.875Q10.15 2.875 8.425 3.462Q6.7 4.05 5.2 5.125H7.375V7.375ZM9.65 23.375 3.65 17.35 5.175 15.575 9.625 16.725V6.875Q9.625 6.075 10.163 5.537Q10.7 5 11.5 5Q12.3 5 12.838 5.537Q13.375 6.075 13.375 6.875V12.35H14.825L20.45 15.125L19.1 23.375Z"/>
    </Icon>
  )
});

export default IconMaterialSwipeSharpW700Filled;
