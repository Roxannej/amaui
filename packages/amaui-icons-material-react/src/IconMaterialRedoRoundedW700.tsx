import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRedoRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoRoundedW700'
      short_name='Redo'

      {...props}
    >
      <path d="M9.775 19.575Q7.125 19.575 5.213 17.825Q3.3 16.075 3.3 13.5Q3.3 10.925 5.213 9.175Q7.125 7.425 9.775 7.425H14.7L13.775 6.5Q13.325 6.05 13.325 5.4Q13.325 4.75 13.775 4.3Q14.225 3.85 14.875 3.85Q15.525 3.85 15.975 4.3L19.575 7.9Q19.8 8.125 19.913 8.412Q20.025 8.7 20.025 9Q20.025 9.3 19.913 9.587Q19.8 9.875 19.575 10.1L15.975 13.7Q15.525 14.15 14.875 14.15Q14.225 14.15 13.775 13.7Q13.325 13.25 13.325 12.6Q13.325 11.95 13.775 11.5L14.7 10.575H9.775Q8.425 10.575 7.438 11.4Q6.45 12.225 6.45 13.5Q6.45 14.775 7.438 15.6Q8.425 16.425 9.775 16.425H15.875Q16.525 16.425 16.988 16.888Q17.45 17.35 17.45 18Q17.45 18.65 16.988 19.112Q16.525 19.575 15.875 19.575Z"/>
    </Icon>
  )
});

export default IconMaterialRedoRoundedW700;
