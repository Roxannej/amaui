import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAddOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAddOutlined'
      short_name='NoteAdd'

      {...props}
    >
      <path d="M11 18H13V15H16V13H13V10H11V13H8V15H11ZM18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14L20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM13 9V4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20H18Q18 20 18 20Q18 20 18 20V9ZM6 4V9V4V9V20Q6 20 6 20Q6 20 6 20Q6 20 6 20Q6 20 6 20V4Q6 4 6 4Q6 4 6 4Z"/>
    </Icon>
  )
});

export default IconMaterialNoteAddOutlined;