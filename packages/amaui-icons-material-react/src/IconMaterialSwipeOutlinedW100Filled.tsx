import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwipeOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeOutlinedW100Filled'
      short_name='Swipe'

      {...props}
    >
      <path d="M2.8 6.2V2H3.5V4.9Q5.3 3.4 7.475 2.55Q9.65 1.7 12 1.7Q14.35 1.7 16.525 2.537Q18.7 3.375 20.5 4.9V2H21.2V6.2H17V5.5H20.15Q18.375 4.1 16.325 3.25Q14.275 2.4 12 2.4Q9.725 2.4 7.675 3.25Q5.625 4.1 3.85 5.5H7V6.2ZM10.55 21.7Q10.4 21.7 10.262 21.637Q10.125 21.575 10 21.45L5.75 17.25L6.3 16.7Q6.4 16.6 6.513 16.55Q6.625 16.5 6.75 16.55L10.3 17.25V7.5Q10.3 7 10.65 6.65Q11 6.3 11.5 6.3Q12 6.3 12.35 6.65Q12.7 7 12.7 7.5V12.8H13.75Q13.85 12.8 13.938 12.825Q14.025 12.85 14.1 12.9L17.15 14.4Q17.875 14.775 18.188 15.55Q18.5 16.325 18.35 17.15L17.65 21.15Q17.6 21.4 17.413 21.55Q17.225 21.7 16.95 21.7Z"/>
    </Icon>
  )
});

export default IconMaterialSwipeOutlinedW100Filled;
