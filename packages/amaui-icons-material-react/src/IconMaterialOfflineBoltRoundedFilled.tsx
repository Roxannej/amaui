import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOfflineBoltRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineBoltRoundedFilled'
      short_name='OfflineBolt'

      {...props}
    >
      <path d="M11.4 13.5V16.925Q11.4 17.325 11.775 17.413Q12.15 17.5 12.35 17.15L15.375 11.225Q15.5 10.975 15.35 10.738Q15.2 10.5 14.925 10.5H12.75V7.025Q12.75 6.625 12.375 6.525Q12 6.425 11.8 6.775L8.65 12.775Q8.525 13.025 8.663 13.262Q8.8 13.5 9.075 13.5ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  )
});

export default IconMaterialOfflineBoltRoundedFilled;
