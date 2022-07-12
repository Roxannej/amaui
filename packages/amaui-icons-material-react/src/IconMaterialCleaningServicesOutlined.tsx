import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCleaningServicesOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningServicesOutlined'
      short_name='CleaningServices'

      {...props}
    >
      <path d="M3 23V16Q3 13.925 4.463 12.462Q5.925 11 8 11H9V3Q9 2.175 9.588 1.587Q10.175 1 11 1H13Q13.825 1 14.413 1.587Q15 2.175 15 3V11H16Q18.075 11 19.538 12.462Q21 13.925 21 16V23ZM5 21H7V18Q7 17.575 7.287 17.288Q7.575 17 8 17Q8.425 17 8.713 17.288Q9 17.575 9 18V21H11V18Q11 17.575 11.288 17.288Q11.575 17 12 17Q12.425 17 12.713 17.288Q13 17.575 13 18V21H15V18Q15 17.575 15.288 17.288Q15.575 17 16 17Q16.425 17 16.712 17.288Q17 17.575 17 18V21H19V16Q19 14.75 18.125 13.875Q17.25 13 16 13H8Q6.75 13 5.875 13.875Q5 14.75 5 16ZM13 11V3Q13 3 13 3Q13 3 13 3H11Q11 3 11 3Q11 3 11 3V11Z"/>
    </Icon>
  )
});

export default IconMaterialCleaningServicesOutlined;
