import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerNotesTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerNotesTwoTone'
      short_name='SpeakerNotes'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 17.17l.59-.59.58-.58H20V4H4v13.17zM10 6h8v2h-8V6zm0 3h8v2h-8V9zm0 3h5v2h-5v-2zM6 6h2v2H6V6zm0 3h2v2H6V9zm0 3h2v2H6v-2z" opacity=".3"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM6 12h2v2H6zm0-3h2v2H6zm0-3h2v2H6zm4 6h5v2h-5zm0-3h8v2h-8zm0-3h8v2h-8z"/>
    </Icon>
  );
});

export default IconMaterialSpeakerNotesTwoTone;