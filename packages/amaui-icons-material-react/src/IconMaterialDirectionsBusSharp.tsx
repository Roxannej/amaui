import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsBusSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBusSharp'
      short_name='DirectionsBus'

      {...props}
    >
      <path d="M5 21V17.95Q4.55 17.45 4.275 16.837Q4 16.225 4 15.5V6Q4 3.925 5.925 2.962Q7.85 2 12 2Q16.3 2 18.15 2.925Q20 3.85 20 6V15.5Q20 16.225 19.725 16.837Q19.45 17.45 19 17.95V21H16V19H8V21ZM12.05 5Q14.8 5 16.038 5Q17.275 5 17.65 5H6.45Q6.9 5 8.137 5Q9.375 5 12.05 5ZM16 12H8Q7.175 12 6.588 12Q6 12 6 12H18Q18 12 17.413 12Q16.825 12 16 12ZM6 10H18V7H6ZM8.5 16Q9.125 16 9.562 15.562Q10 15.125 10 14.5Q10 13.875 9.562 13.438Q9.125 13 8.5 13Q7.875 13 7.438 13.438Q7 13.875 7 14.5Q7 15.125 7.438 15.562Q7.875 16 8.5 16ZM15.5 16Q16.125 16 16.562 15.562Q17 15.125 17 14.5Q17 13.875 16.562 13.438Q16.125 13 15.5 13Q14.875 13 14.438 13.438Q14 13.875 14 14.5Q14 15.125 14.438 15.562Q14.875 16 15.5 16ZM6.45 5H17.65Q17.275 4.575 16.038 4.287Q14.8 4 12.05 4Q9.375 4 8.137 4.312Q6.9 4.625 6.45 5ZM8 17H16Q16.825 17 17.413 16.413Q18 15.825 18 15V12H6V15Q6 15.825 6.588 16.413Q7.175 17 8 17Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsBusSharp;
