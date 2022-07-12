import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboundRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboundRounded'
      short_name='Outbound'

      {...props}
    >
      <path d="M14 11.4V12.675Q14 13.1 14.288 13.375Q14.575 13.65 15 13.65Q15.425 13.65 15.713 13.362Q16 13.075 16 12.65V9Q16 8.575 15.713 8.287Q15.425 8 15 8H11.325Q10.9 8 10.625 8.287Q10.35 8.575 10.35 9Q10.35 9.425 10.638 9.712Q10.925 10 11.35 10H12.575L8.175 14.4Q7.9 14.675 7.913 15.1Q7.925 15.525 8.2 15.8Q8.5 16.1 8.9 16.1Q9.3 16.1 9.6 15.8ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z"/>
    </Icon>
  )
});

export default IconMaterialOutboundRounded;
