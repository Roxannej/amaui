import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderCopyOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyOutlined'
      short_name='FolderCopy'

      {...props}
    >
      <path d="M3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V6H3V19Q3 19 3 19Q3 19 3 19H20V21ZM7 17Q6.175 17 5.588 16.413Q5 15.825 5 15V4Q5 3.175 5.588 2.587Q6.175 2 7 2H12L14 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V15Q23 15.825 22.413 16.413Q21.825 17 21 17ZM7 15H21Q21 15 21 15Q21 15 21 15V6Q21 6 21 6Q21 6 21 6H13.175L11.175 4H7Q7 4 7 4Q7 4 7 4V15Q7 15 7 15Q7 15 7 15ZM7 15Q7 15 7 15Q7 15 7 15V4Q7 4 7 4Q7 4 7 4V6Q7 6 7 6Q7 6 7 6V15Q7 15 7 15Q7 15 7 15Z"/>
    </Icon>
  )
});

export default IconMaterialFolderCopyOutlined;
