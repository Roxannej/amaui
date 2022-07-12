import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteOutlinedFilled'
      short_name='Note'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14L20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM13 9H18L13 4Z"/>
    </Icon>
  )
});

export default IconMaterialNoteOutlinedFilled;