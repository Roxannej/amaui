import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslockTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockTwoTone'
      short_name='KeyboardCapslock'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardCapslockTwoTone;
