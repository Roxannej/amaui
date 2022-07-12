import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenRounded'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18L5.975 11.425Q6.175 10.775 6.713 10.387Q7.25 10 7.9 10H20.8Q21.825 10 22.413 10.812Q23 11.625 22.725 12.575L20.925 18.575Q20.725 19.225 20.188 19.613Q19.65 20 19 20ZM6.1 18H19L20.8 12H7.9ZM6.1 18 7.9 12 6.1 18ZM4 10V6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8.587Q4 9.175 4 10Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOpenRounded;
