import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventNoteSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNoteSharpW700'
      short_name='EventNote'

      {...props}
    >
      <path d="M7 14.225V11.85H17V14.225ZM7 18.15V15.775H14V18.15ZM2.15 22.85V3.15H6V1.15H8.575V3.15H15.425V1.15H18V3.15H21.85V22.85ZM5.3 19.7H18.7V10H5.3ZM5.3 8H18.7V6.3H5.3ZM5.3 8V6.3V8Z"/>
    </Icon>
  )
});

export default IconMaterialEventNoteSharpW700;
