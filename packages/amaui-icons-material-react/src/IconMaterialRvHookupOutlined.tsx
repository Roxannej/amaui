import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRvHookupOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RvHookupOutlined'
      short_name='RvHookup'

      {...props}
    >
      <path d="M19.5 21.5 18.1 20.1 19.2 19H11.8Q11.5 19.9 10.725 20.45Q9.95 21 9 21Q8.05 21 7.288 20.45Q6.525 19.9 6.2 19H5Q3.75 19 2.875 18.125Q2 17.25 2 16V10H8V7H2V5H15Q15.825 5 16.413 5.588Q17 6.175 17 7V17H19.15L18.1 15.95L19.5 14.5L23 18ZM10 10H15V7Q15 7 15 7Q15 7 15 7H10ZM9 19Q9.425 19 9.713 18.712Q10 18.425 10 18Q10 17.575 9.713 17.288Q9.425 17 9 17Q8.575 17 8.288 17.288Q8 17.575 8 18Q8 18.425 8.288 18.712Q8.575 19 9 19ZM6.2 17Q6.525 16.1 7.288 15.55Q8.05 15 9 15Q9.95 15 10.725 15.55Q11.5 16.1 11.8 17H15V12H4V16Q4 16.425 4.287 16.712Q4.575 17 5 17ZM6.2 12H5Q4.575 12 4.287 12Q4 12 4 12H15H11.8Q11.5 12 10.725 12Q9.95 12 9 12Q8.05 12 7.288 12Q6.525 12 6.2 12Z"/>
    </Icon>
  )
});

export default IconMaterialRvHookupOutlined;
