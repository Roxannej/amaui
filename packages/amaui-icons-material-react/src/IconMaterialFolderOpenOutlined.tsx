import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenOutlined'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H10L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18L6.4 10H23.5L20.925 18.575Q20.725 19.225 20.188 19.613Q19.65 20 19 20ZM6.1 18H19L20.8 12H7.9ZM6.1 18 7.9 12 6.1 18ZM4 8V6Q4 6 4 6Q4 6 4 6V8Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOpenOutlined;