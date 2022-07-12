import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDescriptionRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionRoundedW100Filled'
      short_name='Description'

      {...props}
    >
      <path d="M9 17.35H15Q15.15 17.35 15.25 17.25Q15.35 17.15 15.35 17Q15.35 16.85 15.25 16.75Q15.15 16.65 15 16.65H9Q8.85 16.65 8.75 16.75Q8.65 16.85 8.65 17Q8.65 17.15 8.75 17.25Q8.85 17.35 9 17.35ZM9 13.35H15Q15.15 13.35 15.25 13.25Q15.35 13.15 15.35 13Q15.35 12.85 15.25 12.75Q15.15 12.65 15 12.65H9Q8.85 12.65 8.75 12.75Q8.65 12.85 8.65 13Q8.65 13.15 8.75 13.25Q8.85 13.35 9 13.35ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H14.025Q14.325 3.3 14.6 3.412Q14.875 3.525 15.1 3.75L18.25 6.9Q18.475 7.125 18.587 7.4Q18.7 7.675 18.7 7.975V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM15.05 7.7H18L14.3 4V6.95Q14.3 7.275 14.513 7.487Q14.725 7.7 15.05 7.7Z"/>
    </Icon>
  )
});

export default IconMaterialDescriptionRoundedW100Filled;
