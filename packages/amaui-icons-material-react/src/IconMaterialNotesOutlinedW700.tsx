import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotesOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesOutlinedW700'
      short_name='Notes'

      {...props}
    >
      <path d="M2.425 13.575V10.425H21.575V13.575ZM2.425 18.95V15.8H15.575V18.95ZM2.425 8.2V5.05H21.575V8.2Z"/>
    </Icon>
  )
});

export default IconMaterialNotesOutlinedW700;
