import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileOpenOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenOutlinedW100'
      short_name='FileOpen'

      {...props}
    >
      <path d="M6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H14.65L18.7 7.35V14.65H18V7.7H14.3V4H6.8Q6.5 4 6.25 4.25Q6 4.5 6 4.8V19.2Q6 19.5 6.25 19.75Q6.5 20 6.8 20H15.65V20.7ZM21.95 21.45 18.35 17.85V21.025H17.65V16.65H22.025V17.35H18.825L22.425 20.95ZM6 20V14.65V7.7V4Q6 4 6 4.25Q6 4.5 6 4.8V19.2Q6 19.5 6 19.75Q6 20 6 20Z"/>
    </Icon>
  )
});

export default IconMaterialFileOpenOutlinedW100;
