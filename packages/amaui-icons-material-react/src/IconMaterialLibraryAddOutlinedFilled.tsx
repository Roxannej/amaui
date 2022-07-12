import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLibraryAddOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddOutlinedFilled'
      short_name='LibraryAdd'

      {...props}
    >
      <path d="M13 14H15V11H18V9H15V6H13V9H10V11H13ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialLibraryAddOutlinedFilled;
