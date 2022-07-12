import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCableRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableRoundedW700Filled'
      short_name='Cable'

      {...props}
    >
      <path d="M5 21.375Q4.425 21.375 4.025 20.975Q3.625 20.575 3.625 20V19.375H3.6Q3.175 19.375 2.9 19.1Q2.625 18.825 2.625 18.4V15Q2.625 14.425 3.025 14.025Q3.425 13.625 4 13.625H4.625V7Q4.625 5.2 5.912 3.912Q7.2 2.625 9 2.625Q10.8 2.625 12.088 3.912Q13.375 5.2 13.375 7V17Q13.375 17.675 13.85 18.15Q14.325 18.625 15 18.625Q15.675 18.625 16.15 18.15Q16.625 17.675 16.625 17V10.375H16Q15.425 10.375 15.025 9.975Q14.625 9.575 14.625 9V5.6Q14.625 5.175 14.9 4.9Q15.175 4.625 15.6 4.625H15.625V4Q15.625 3.425 16.025 3.025Q16.425 2.625 17 2.625H19Q19.575 2.625 19.975 3.025Q20.375 3.425 20.375 4V4.625H20.4Q20.825 4.625 21.1 4.9Q21.375 5.175 21.375 5.6V9Q21.375 9.575 20.975 9.975Q20.575 10.375 20 10.375H19.375V17Q19.375 18.8 18.087 20.087Q16.8 21.375 15 21.375Q13.2 21.375 11.913 20.087Q10.625 18.8 10.625 17V7Q10.625 6.325 10.15 5.85Q9.675 5.375 9 5.375Q8.325 5.375 7.85 5.85Q7.375 6.325 7.375 7V13.625H8Q8.575 13.625 8.975 14.025Q9.375 14.425 9.375 15V18.4Q9.375 18.825 9.1 19.1Q8.825 19.375 8.4 19.375H8.375V20Q8.375 20.575 7.975 20.975Q7.575 21.375 7 21.375Z"/>
    </Icon>
  )
});

export default IconMaterialCableRoundedW700Filled;
