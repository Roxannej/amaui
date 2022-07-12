import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFmdBadOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBadOutlinedW700Filled'
      short_name='FmdBad'

      {...props}
    >
      <path d="M10.8 11.575H13.2V6H10.8ZM12 15.2Q12.5 15.2 12.85 14.85Q13.2 14.5 13.2 14Q13.2 13.5 12.85 13.15Q12.5 12.8 12 12.8Q11.5 12.8 11.15 13.15Q10.8 13.5 10.8 14Q10.8 14.5 11.15 14.85Q11.5 15.2 12 15.2ZM12 22.75Q7.7 19.075 5.562 15.962Q3.425 12.85 3.425 10.2Q3.425 6.175 6.013 3.8Q8.6 1.425 12 1.425Q15.4 1.425 17.988 3.8Q20.575 6.175 20.575 10.2Q20.575 12.85 18.438 15.962Q16.3 19.075 12 22.75Z"/>
    </Icon>
  )
});

export default IconMaterialFmdBadOutlinedW700Filled;
