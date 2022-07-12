import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffOutlinedFilled'
      short_name='EditOff'

      {...props}
    >
      <path d="M19.8 22.6 12.725 15.525 7.25 21H3V16.75L8.475 11.275L1.4 4.2L2.825 2.775L21.225 21.175ZM15.575 12.675 11.325 8.425 16.45 3.325Q17.025 2.75 17.863 2.75Q18.7 2.75 19.275 3.325L20.675 4.75Q21.25 5.325 21.25 6.15Q21.25 6.975 20.675 7.55ZM17.85 7.55 19.25 6.15 17.85 4.75 16.45 6.15Z"/>
    </Icon>
  )
});

export default IconMaterialEditOffOutlinedFilled;