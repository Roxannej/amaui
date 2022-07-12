import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSnippetFolderOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolderOutlinedFilled'
      short_name='SnippetFolder'

      {...props}
    >
      <path d="M14.5 15.5V10.5H15.875L17.5 12.125V15.5ZM13 17H19V11.5L16.5 9H13ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H10L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialSnippetFolderOutlinedFilled;
