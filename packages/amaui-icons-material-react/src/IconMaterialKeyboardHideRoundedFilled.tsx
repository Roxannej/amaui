import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardHideRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardHideRoundedFilled'
      short_name='KeyboardHide'

      {...props}
    >
      <path d="M4 17Q3.175 17 2.588 16.413Q2 15.825 2 15V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V15Q22 15.825 21.413 16.413Q20.825 17 20 17ZM11 8H13V6H11ZM11 11H13V9H11ZM8 8H10V6H8ZM8 11H10V9H8ZM5 11H7V9H5ZM5 8H7V6H5ZM9 14H15Q15.425 14 15.713 13.712Q16 13.425 16 13Q16 12.575 15.713 12.287Q15.425 12 15 12H9Q8.575 12 8.288 12.287Q8 12.575 8 13Q8 13.425 8.288 13.712Q8.575 14 9 14ZM14 11H16V9H14ZM14 8H16V6H14ZM17 11H19V9H17ZM17 8H19V6H17ZM12 22.8Q11.95 22.8 11.65 22.65L8.85 19.85Q8.6 19.6 8.725 19.3Q8.85 19 9.2 19H14.8Q15.15 19 15.275 19.3Q15.4 19.6 15.15 19.85L12.35 22.65Q12.3 22.7 12 22.8Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardHideRoundedFilled;
