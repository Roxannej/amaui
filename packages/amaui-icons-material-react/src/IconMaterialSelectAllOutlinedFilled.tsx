import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSelectAllOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectAllOutlinedFilled'
      short_name='SelectAll'

      {...props}
    >
      <path d="M3 5Q3 4.175 3.587 3.587Q4.175 3 5 3V5ZM3 13V11H5V13ZM7 21V19H9V21ZM3 9V7H5V9ZM11 5V3H13V5ZM19 5V3Q19.825 3 20.413 3.587Q21 4.175 21 5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19H5ZM3 17V15H5V17ZM7 5V3H9V5ZM11 21V19H13V21ZM19 13V11H21V13ZM19 21V19H21Q21 19.825 20.413 20.413Q19.825 21 19 21ZM19 9V7H21V9ZM19 17V15H21V17ZM15 21V19H17V21ZM15 5V3H17V5ZM7 17V7H17V17ZM9 15H15V9H9Z"/>
    </Icon>
  )
});

export default IconMaterialSelectAllOutlinedFilled;