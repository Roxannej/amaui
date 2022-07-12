import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddOutlinedW700'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M11 18.275H13V15.275H16V13.275H13V10.275H11V13.275H8V15.275H11ZM17.7 22.85H6.3Q4.975 22.85 4.062 21.938Q3.15 21.025 3.15 19.7V4.3Q3.15 2.975 4.062 2.062Q4.975 1.15 6.3 1.15H14.35L20.85 7.65V19.7Q20.85 21.025 19.938 21.938Q19.025 22.85 17.7 22.85ZM12.7 9.3V4.3H6.3Q6.3 4.3 6.3 4.3Q6.3 4.3 6.3 4.3V19.7Q6.3 19.7 6.3 19.7Q6.3 19.7 6.3 19.7H17.7Q17.7 19.7 17.7 19.7Q17.7 19.7 17.7 19.7V9.3ZM6.3 4.3V9.3V4.3V9.3V19.7Q6.3 19.7 6.3 19.7Q6.3 19.7 6.3 19.7Q6.3 19.7 6.3 19.7Q6.3 19.7 6.3 19.7V4.3Q6.3 4.3 6.3 4.3Q6.3 4.3 6.3 4.3Z"/>
    </Icon>
  )
});

export default IconMaterialNoteAddOutlinedW700;
