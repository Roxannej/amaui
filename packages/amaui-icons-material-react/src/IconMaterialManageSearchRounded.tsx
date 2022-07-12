import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialManageSearchRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageSearchRounded'
      short_name='ManageSearch'

      {...props}
    >
      <path d="M3 9Q2.575 9 2.288 8.712Q2 8.425 2 8Q2 7.575 2.288 7.287Q2.575 7 3 7H6Q6.425 7 6.713 7.287Q7 7.575 7 8Q7 8.425 6.713 8.712Q6.425 9 6 9ZM3 14Q2.575 14 2.288 13.712Q2 13.425 2 13Q2 12.575 2.288 12.287Q2.575 12 3 12H6Q6.425 12 6.713 12.287Q7 12.575 7 13Q7 13.425 6.713 13.712Q6.425 14 6 14ZM19.9 18.3 16.75 15.15Q16.15 15.575 15.438 15.787Q14.725 16 14 16Q11.925 16 10.463 14.537Q9 13.075 9 11Q9 8.925 10.463 7.462Q11.925 6 14 6Q16.075 6 17.538 7.462Q19 8.925 19 11Q19 11.725 18.788 12.438Q18.575 13.15 18.15 13.75L21.3 16.9Q21.575 17.175 21.575 17.6Q21.575 18.025 21.3 18.3Q21.025 18.575 20.6 18.575Q20.175 18.575 19.9 18.3ZM14 14Q15.25 14 16.125 13.125Q17 12.25 17 11Q17 9.75 16.125 8.875Q15.25 8 14 8Q12.75 8 11.875 8.875Q11 9.75 11 11Q11 12.25 11.875 13.125Q12.75 14 14 14ZM3 19Q2.575 19 2.288 18.712Q2 18.425 2 18Q2 17.575 2.288 17.288Q2.575 17 3 17H11Q11.425 17 11.713 17.288Q12 17.575 12 18Q12 18.425 11.713 18.712Q11.425 19 11 19Z"/>
    </Icon>
  )
});

export default IconMaterialManageSearchRounded;