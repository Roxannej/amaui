import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreRounded'
      short_name='More'

      {...props}
    >
      <path d="M9.5 13Q9.925 13 10.213 12.712Q10.5 12.425 10.5 12Q10.5 11.575 10.213 11.287Q9.925 11 9.5 11Q9.075 11 8.788 11.287Q8.5 11.575 8.5 12Q8.5 12.425 8.788 12.712Q9.075 13 9.5 13ZM13 13Q13.425 13 13.713 12.712Q14 12.425 14 12Q14 11.575 13.713 11.287Q13.425 11 13 11Q12.575 11 12.288 11.287Q12 11.575 12 12Q12 12.425 12.288 12.712Q12.575 13 13 13ZM16.5 13Q16.925 13 17.212 12.712Q17.5 12.425 17.5 12Q17.5 11.575 17.212 11.287Q16.925 11 16.5 11Q16.075 11 15.787 11.287Q15.5 11.575 15.5 12Q15.5 12.425 15.787 12.712Q16.075 13 16.5 13ZM9 19Q8.5 19 8.062 18.775Q7.625 18.55 7.35 18.15L3.825 13.15Q3.475 12.625 3.475 12Q3.475 11.375 3.825 10.85L7.35 5.85Q7.625 5.45 8.062 5.225Q8.5 5 9 5H19Q19.825 5 20.413 5.588Q21 6.175 21 7V17Q21 17.825 20.413 18.413Q19.825 19 19 19ZM5.45 12 9 17Q9 17 9 17Q9 17 9 17H19Q19 17 19 17Q19 17 19 17V7Q19 7 19 7Q19 7 19 7H9Q9 7 9 7Q9 7 9 7ZM19 12V7Q19 7 19 7Q19 7 19 7Q19 7 19 7Q19 7 19 7V17Q19 17 19 17Q19 17 19 17Q19 17 19 17Q19 17 19 17Z"/>
    </Icon>
  )
});

export default IconMaterialMoreRounded;
