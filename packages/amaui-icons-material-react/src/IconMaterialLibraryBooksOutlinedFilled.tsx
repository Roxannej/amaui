import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLibraryBooksOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryBooksOutlinedFilled'
      short_name='LibraryBooks'

      {...props}
    >
      <path d="M10 11H18V9H10ZM10 14H14V12H10ZM10 8H18V6H10ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialLibraryBooksOutlinedFilled;