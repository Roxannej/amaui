import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditNoteRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNoteRoundedW700'
      short_name='EditNote'

      {...props}
    >
      <path d="M20.525 15.4 17.6 12.475 18.325 11.75Q18.75 11.325 19.425 11.312Q20.1 11.3 20.525 11.75L21.25 12.475Q21.7 12.9 21.688 13.575Q21.675 14.25 21.25 14.675ZM11.425 21.575V18.65L16.9 13.175L19.825 16.1L14.35 21.575ZM2.425 16.925V13.775H10.95V16.925ZM2.425 12.15V9H14.575V12.15ZM2.425 7.375V4.225H14.575V7.375Z"/>
    </Icon>
  )
});

export default IconMaterialEditNoteRoundedW700;