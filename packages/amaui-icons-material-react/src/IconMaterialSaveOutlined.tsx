import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSaveOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveOutlined'
      short_name='Save'

      {...props}
    >
      <path d="M21 7V19Q21 19.825 20.413 20.413Q19.825 21 19 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H17ZM19 7.85 16.15 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19ZM12 18Q13.25 18 14.125 17.125Q15 16.25 15 15Q15 13.75 14.125 12.875Q13.25 12 12 12Q10.75 12 9.875 12.875Q9 13.75 9 15Q9 16.25 9.875 17.125Q10.75 18 12 18ZM6 10H15V6H6ZM5 7.85V19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Z"/>
    </Icon>
  )
});

export default IconMaterialSaveOutlined;