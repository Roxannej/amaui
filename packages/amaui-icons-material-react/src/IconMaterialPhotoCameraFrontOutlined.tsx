import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraFrontOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraFrontOutlined'
      short_name='PhotoCameraFront'

      {...props}
    >
      <path d="M8 17H16V16.45Q16 15.325 14.9 14.662Q13.8 14 12 14Q10.2 14 9.1 14.662Q8 15.325 8 16.45ZM12 13Q12.825 13 13.413 12.412Q14 11.825 14 11Q14 10.175 13.413 9.587Q12.825 9 12 9Q11.175 9 10.588 9.587Q10 10.175 10 11Q10 11.825 10.588 12.412Q11.175 13 12 13ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L9 3H15L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM20 19Q20 19 20 19Q20 19 20 19V7Q20 7 20 7Q20 7 20 7H15.95L14.125 5H9.875L8.05 7H4Q4 7 4 7Q4 7 4 7V19Q4 19 4 19Q4 19 4 19ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoCameraFrontOutlined;