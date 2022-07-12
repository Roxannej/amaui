import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffOutlined'
      short_name='FolderOff'

      {...props}
    >
      <path d="M21.75 18.925 20 17.175V8Q20 8 20 8Q20 8 20 8H11.175L9.175 6H8.825L6.825 4H10L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.275 21.938 18.5Q21.875 18.725 21.75 18.925ZM20.475 23.3 17.175 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.725 2.062 5.5Q2.125 5.275 2.25 5.075L0.7 3.5L2.1 2.1L21.9 21.9ZM4 18H15.175L4 6.825Q4 6.825 4 6.825Q4 6.825 4 6.825V18Q4 18 4 18Q4 18 4 18ZM9.575 12.4Q9.575 12.4 9.575 12.4Q9.575 12.4 9.575 12.4Q9.575 12.4 9.575 12.4Q9.575 12.4 9.575 12.4ZM14.375 11.55Q14.375 11.55 14.375 11.55Q14.375 11.55 14.375 11.55Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOffOutlined;