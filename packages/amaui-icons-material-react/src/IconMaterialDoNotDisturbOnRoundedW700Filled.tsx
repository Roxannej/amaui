import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoNotDisturbOnRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOnRoundedW700Filled'
      short_name='DoNotDisturbOn'

      {...props}
    >
      <path d="M8.575 13.575H15.45Q16.1 13.575 16.55 13.112Q17 12.65 17 12Q17 11.35 16.538 10.887Q16.075 10.425 15.425 10.425H8.55Q7.9 10.425 7.45 10.887Q7 11.35 7 12Q7 12.65 7.463 13.112Q7.925 13.575 8.575 13.575ZM12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialDoNotDisturbOnRoundedW700Filled;
