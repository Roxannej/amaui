import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckCircleOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckCircleOutlinedFilled'
      short_name='CheckCircle'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM10.6 16.6 17.65 9.55 16.25 8.15 10.6 13.8 7.75 10.95 6.35 12.35Z"/>
    </Icon>
  )
});

export default IconMaterialCheckCircleOutlinedFilled;