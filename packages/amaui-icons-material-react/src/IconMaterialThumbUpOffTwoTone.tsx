import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpOffTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOffTwoTone'
      short_name='ThumbUpOff'

      {...props}
    >
      <path d="M2.375 21.3Q1.325 21.3 0.588 20.575Q-0.15 19.85 -0.15 18.825V11.85Q-0.15 10.8 0.6 10.075Q1.35 9.35 2.375 9.35Q3.425 9.35 4.15 10.075Q4.875 10.8 4.875 11.825V18.8Q4.875 19.85 4.15 20.575Q3.425 21.3 2.375 21.3ZM9.775 21.3Q8.525 21.3 7.638 20.413Q6.75 19.525 6.75 18.275V9.325Q6.75 8.675 7 8.087Q7.25 7.5 7.75 7.075L12.05 3.15Q12.85 2.425 13.85 2.25Q14.85 2.075 15.65 2.725Q16.225 3.15 16.325 3.875Q16.425 4.6 16.225 5.3L15.525 7.75H21.125Q22.3 7.75 23.225 8.688Q24.15 9.625 24.15 10.775V11.175Q24.15 11.4 24.113 11.675Q24.075 11.95 23.975 12.125L20.9 19.425Q20.425 20.5 19.45 20.9Q18.475 21.3 17.575 21.3Z"/>
    </Icon>
  )
});

export default IconMaterialThumbUpOffTwoTone;
