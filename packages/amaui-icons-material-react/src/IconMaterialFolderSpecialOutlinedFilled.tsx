import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSpecialOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialOutlinedFilled'
      short_name='FolderSpecial'

      {...props}
    >
      <path d="M12.6 16.7 14.9 14.95 17.2 16.7 16.35 13.85 18.65 12H15.8L14.9 9.2L14 12H11.15L13.45 13.85ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H10L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialFolderSpecialOutlinedFilled;