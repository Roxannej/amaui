import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShuffleRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleRoundedW700Filled'
      short_name='Shuffle'

      {...props}
    >
      <path d="M8.9 10.85 4.425 6.375Q4.025 5.975 4.025 5.4Q4.025 4.825 4.425 4.425Q4.825 4.025 5.4 4.025Q5.975 4.025 6.375 4.425L10.85 8.9ZM15 20.375Q14.425 20.375 14.025 19.975Q13.625 19.575 13.625 19Q13.625 18.425 14.025 18.025Q14.425 17.625 15 17.625H15.675L13.125 15.075L15.1 13.1L17.625 15.625V15Q17.625 14.425 18.025 14.025Q18.425 13.625 19 13.625Q19.575 13.625 19.975 14.025Q20.375 14.425 20.375 15V18.8Q20.375 19.45 19.913 19.913Q19.45 20.375 18.8 20.375ZM4.425 19.575Q4.025 19.175 4.025 18.6Q4.025 18.025 4.425 17.625L15.675 6.375H15Q14.425 6.375 14.025 5.975Q13.625 5.575 13.625 5Q13.625 4.425 14.025 4.025Q14.425 3.625 15 3.625H18.8Q19.45 3.625 19.913 4.087Q20.375 4.55 20.375 5.2V9Q20.375 9.575 19.975 9.975Q19.575 10.375 19 10.375Q18.425 10.375 18.025 9.975Q17.625 9.575 17.625 9V8.325L6.375 19.575Q5.975 19.975 5.4 19.975Q4.825 19.975 4.425 19.575Z"/>
    </Icon>
  )
});

export default IconMaterialShuffleRoundedW700Filled;