import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddOutlinedFilled'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14L20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM13 9H18L13 4ZM11 18H13V15H16V13H13V10H11V13H8V15H11Z"/>
    </Icon>
  )
});

export default IconMaterialNoteAddOutlinedFilled;
