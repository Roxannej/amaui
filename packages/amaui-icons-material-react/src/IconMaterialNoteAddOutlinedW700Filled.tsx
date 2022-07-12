import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddOutlinedW700Filled'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M6.3 22.85Q4.975 22.85 4.062 21.938Q3.15 21.025 3.15 19.7V4.3Q3.15 2.975 4.062 2.062Q4.975 1.15 6.3 1.15H14.35L20.85 7.65V19.7Q20.85 21.025 19.938 21.938Q19.025 22.85 17.7 22.85ZM12.7 9.3H17.7L12.7 4.3ZM11 18.275H13V15.275H16V13.275H13V10.275H11V13.275H8V15.275H11Z"/>
    </Icon>
  )
});

export default IconMaterialNoteAddOutlinedW700Filled;
