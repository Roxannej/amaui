import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderDeleteOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteOutlined'
      short_name='FolderDelete'

      {...props}
    >
      <path d="M14.5 17H16.5Q17.125 17 17.562 16.562Q18 16.125 18 15.5V11.5H19V10H16.5V9H14.5V10H12V11.5H13V15.5Q13 16.125 13.438 16.562Q13.875 17 14.5 17ZM14.5 15.5Q14.5 15.5 14.5 15.5Q14.5 15.5 14.5 15.5V11.5H16.5V15.5Q16.5 15.5 16.5 15.5Q16.5 15.5 16.5 15.5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H10L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18H20Q20 18 20 18Q20 18 20 18V8Q20 8 20 8Q20 8 20 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8Q4 8 4 8V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  )
});

export default IconMaterialFolderDeleteOutlined;
