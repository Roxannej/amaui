import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddOutlinedW100'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M11.65 17.35H12.35V14.35H15.35V13.65H12.35V10.65H11.65V13.65H8.65V14.35H11.65ZM17.2 20.7H6.8Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H14.65L18.7 7.35V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM14.3 7.7V4H6.8Q6.5 4 6.25 4.25Q6 4.5 6 4.8V19.2Q6 19.5 6.25 19.75Q6.5 20 6.8 20H17.2Q17.5 20 17.75 19.75Q18 19.5 18 19.2V7.7ZM6 4V7.7V4V7.7V19.2Q6 19.5 6 19.75Q6 20 6 20Q6 20 6 19.75Q6 19.5 6 19.2V4.8Q6 4.5 6 4.25Q6 4 6 4Z"/>
    </Icon>
  )
});

export default IconMaterialNoteAddOutlinedW100;
