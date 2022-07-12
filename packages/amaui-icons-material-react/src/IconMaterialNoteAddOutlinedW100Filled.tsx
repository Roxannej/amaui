import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddOutlinedW100Filled'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H14.65L18.7 7.35V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM14.3 7.7H18L14.3 4ZM11.65 17.35H12.35V14.35H15.35V13.65H12.35V10.65H11.65V13.65H8.65V14.35H11.65Z"/>
    </Icon>
  )
});

export default IconMaterialNoteAddOutlinedW100Filled;
