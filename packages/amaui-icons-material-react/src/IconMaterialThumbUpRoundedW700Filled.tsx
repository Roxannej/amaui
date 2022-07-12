import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpRoundedW700Filled'
      short_name='ThumbUp'

      {...props}
    >
      <path d="M2.125 21.5Q1.125 21.5 0.425 20.812Q-0.275 20.125 -0.275 19.15V11.65Q-0.275 10.675 0.438 9.975Q1.15 9.275 2.125 9.275Q3.125 9.275 3.812 9.962Q4.5 10.65 4.5 11.625V19.125Q4.5 20.1 3.8 20.8Q3.1 21.5 2.125 21.5ZM9.65 21.5Q8.35 21.5 7.425 20.575Q6.5 19.65 6.5 18.35V9.25Q6.5 8.575 6.763 7.962Q7.025 7.35 7.525 6.925L12.1 2.725Q12.9 2 13.925 1.875Q14.95 1.75 15.725 2.425Q16.225 2.85 16.337 3.487Q16.45 4.125 16.275 4.775L15.6 7.55H21.125Q22.35 7.55 23.312 8.512Q24.275 9.475 24.275 10.7V11.15Q24.275 11.375 24.225 11.65Q24.175 11.925 24.075 12.125L20.925 19.6Q20.45 20.7 19.413 21.1Q18.375 21.5 17.425 21.5Z"/>
    </Icon>
  )
});

export default IconMaterialThumbUpRoundedW700Filled;
