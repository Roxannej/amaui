import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTaskAltOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskAltOutlinedFilled'
      short_name='TaskAlt'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q13.625 2 15.075 2.475Q16.525 2.95 17.75 3.8L16.3 5.275Q15.35 4.675 14.275 4.337Q13.2 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 11.55 19.95 11.1Q19.9 10.65 19.8 10.225L21.425 8.6Q21.7 9.4 21.85 10.25Q22 11.1 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM10.6 16.6 6.35 12.35 7.75 10.95 10.6 13.8 20.6 3.775 22 5.175Z"/>
    </Icon>
  )
});

export default IconMaterialTaskAltOutlinedFilled;