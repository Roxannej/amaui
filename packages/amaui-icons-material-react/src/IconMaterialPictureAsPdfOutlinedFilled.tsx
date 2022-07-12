import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureAsPdfOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureAsPdfOutlinedFilled'
      short_name='PictureAsPdf'

      {...props}
    >
      <path d="M9 13H10V11H11Q11.425 11 11.713 10.712Q12 10.425 12 10V9Q12 8.575 11.713 8.287Q11.425 8 11 8H9ZM10 10V9H11V10ZM13 13H15Q15.425 13 15.713 12.712Q16 12.425 16 12V9Q16 8.575 15.713 8.287Q15.425 8 15 8H13ZM14 12V9H15V12ZM17 13H18V11H19V10H18V9H19V8H17ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialPictureAsPdfOutlinedFilled;
