import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUndoRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UndoRoundedW700Filled'
      short_name='Undo'

      {...props}
    >
      <path d="M8.125 19.575Q7.475 19.575 7.013 19.112Q6.55 18.65 6.55 18Q6.55 17.35 7.013 16.888Q7.475 16.425 8.125 16.425H14.225Q15.575 16.425 16.562 15.6Q17.55 14.775 17.55 13.5Q17.55 12.225 16.562 11.4Q15.575 10.575 14.225 10.575H9.3L10.225 11.5Q10.675 11.95 10.675 12.6Q10.675 13.25 10.225 13.7Q9.775 14.15 9.125 14.15Q8.475 14.15 8.025 13.7L4.425 10.1Q4.2 9.875 4.088 9.587Q3.975 9.3 3.975 9Q3.975 8.7 4.088 8.412Q4.2 8.125 4.425 7.9L8.025 4.3Q8.475 3.85 9.125 3.85Q9.775 3.85 10.225 4.3Q10.675 4.75 10.675 5.4Q10.675 6.05 10.225 6.5L9.3 7.425H14.225Q16.875 7.425 18.788 9.175Q20.7 10.925 20.7 13.5Q20.7 16.075 18.788 17.825Q16.875 19.575 14.225 19.575Z"/>
    </Icon>
  )
});

export default IconMaterialUndoRoundedW700Filled;