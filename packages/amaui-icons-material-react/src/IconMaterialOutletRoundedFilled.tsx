import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutletRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutletRoundedFilled'
      short_name='Outlet'

      {...props}
    >
      <path d="M9 12Q9.425 12 9.713 11.712Q10 11.425 10 11V8Q10 7.575 9.713 7.287Q9.425 7 9 7Q8.575 7 8.288 7.287Q8 7.575 8 8V11Q8 11.425 8.288 11.712Q8.575 12 9 12ZM15 12Q15.425 12 15.713 11.712Q16 11.425 16 11V8Q16 7.575 15.713 7.287Q15.425 7 15 7Q14.575 7 14.288 7.287Q14 7.575 14 8V11Q14 11.425 14.288 11.712Q14.575 12 15 12ZM11 18H13Q13.425 18 13.713 17.712Q14 17.425 14 17V16Q14 15.175 13.413 14.587Q12.825 14 12 14Q11.175 14 10.588 14.587Q10 15.175 10 16V17Q10 17.425 10.288 17.712Q10.575 18 11 18ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  )
});

export default IconMaterialOutletRoundedFilled;