import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCookieOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieOutlinedFilled'
      short_name='Cookie'

      {...props}
    >
      <path d="M10.5 10Q11.125 10 11.562 9.562Q12 9.125 12 8.5Q12 7.875 11.562 7.438Q11.125 7 10.5 7Q9.875 7 9.438 7.438Q9 7.875 9 8.5Q9 9.125 9.438 9.562Q9.875 10 10.5 10ZM8.5 15Q9.125 15 9.562 14.562Q10 14.125 10 13.5Q10 12.875 9.562 12.438Q9.125 12 8.5 12Q7.875 12 7.438 12.438Q7 12.875 7 13.5Q7 14.125 7.438 14.562Q7.875 15 8.5 15ZM15 16Q15.425 16 15.713 15.712Q16 15.425 16 15Q16 14.575 15.713 14.287Q15.425 14 15 14Q14.575 14 14.288 14.287Q14 14.575 14 15Q14 15.425 14.288 15.712Q14.575 16 15 16ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.9 2.9 7.9Q3.8 5.9 5.413 4.45Q7.025 3 9.238 2.325Q11.45 1.65 14.075 2.2Q13.85 3.325 14.225 4.312Q14.6 5.3 15.35 5.975Q16.1 6.65 17.125 6.9Q18.15 7.15 19.275 6.775Q18.5 8.5 19.55 9.725Q20.6 10.95 21.95 11Q22.175 13.225 21.475 15.225Q20.775 17.225 19.413 18.725Q18.05 20.225 16.138 21.113Q14.225 22 12 22Z"/>
    </Icon>
  )
});

export default IconMaterialCookieOutlinedFilled;
