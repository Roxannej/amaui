import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomePinRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomePinRoundedW700Filled'
      short_name='HomePin'

      {...props}
    >
      <path d="M9 13V8L12 6L15 8V13H13V10H11V13ZM12 18.575Q14.75 16 16.087 13.9Q17.425 11.8 17.425 10.2Q17.425 7.725 15.85 6.15Q14.275 4.575 12 4.575Q9.725 4.575 8.15 6.15Q6.575 7.725 6.575 10.2Q6.575 11.8 7.912 13.9Q9.25 16 12 18.575ZM12 22.75Q7.7 19.075 5.562 15.962Q3.425 12.85 3.425 10.2Q3.425 6.175 6.013 3.8Q8.6 1.425 12 1.425Q15.4 1.425 17.988 3.8Q20.575 6.175 20.575 10.2Q20.575 12.85 18.438 15.962Q16.3 19.075 12 22.75Z"/>
    </Icon>
  )
});

export default IconMaterialHomePinRoundedW700Filled;
