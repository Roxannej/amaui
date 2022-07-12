import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLibraryMusicOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusicOutlinedFilled'
      short_name='LibraryMusic'

      {...props}
    >
      <path d="M12.5 15Q13.55 15 14.275 14.275Q15 13.55 15 12.5V7H18V5H14V10.5Q13.675 10.25 13.3 10.125Q12.925 10 12.5 10Q11.45 10 10.725 10.725Q10 11.45 10 12.5Q10 13.55 10.725 14.275Q11.45 15 12.5 15ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22Z"/>
    </Icon>
  )
});

export default IconMaterialLibraryMusicOutlinedFilled;
