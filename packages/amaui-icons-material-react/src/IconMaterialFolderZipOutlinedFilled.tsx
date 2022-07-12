import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderZipOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipOutlinedFilled'
      short_name='FolderZip'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H10L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM14 18H16V16H18V14H16V12H18V10H16V8H14V10H16V12H14V14H16V16H14Z"/>
    </Icon>
  )
});

export default IconMaterialFolderZipOutlinedFilled;
