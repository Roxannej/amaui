import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaHorizontalOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalOutlined'
      short_name='PanoramaHorizontal'

      {...props}
    >
      <path d="M3 20Q2.575 20 2.288 19.712Q2 19.425 2 19V5Q2 4.575 2.288 4.287Q2.575 4 3 4Q3.425 4 5.725 4.75Q8.025 5.5 12 5.5Q16 5.5 18.288 4.75Q20.575 4 21 4Q21.425 4 21.712 4.287Q22 4.575 22 5V19Q22 19.425 21.712 19.712Q21.425 20 21 20Q20.575 20 18.288 19.25Q16 18.5 12 18.5Q8.025 18.5 5.725 19.25Q3.425 20 3 20ZM4 17.65Q5.95 17.075 7.963 16.788Q9.975 16.5 12 16.5Q14.025 16.5 16.038 16.788Q18.05 17.075 20 17.65V6.375Q18.05 6.95 16.038 7.225Q14.025 7.5 12 7.5Q9.975 7.5 7.963 7.225Q5.95 6.95 4 6.375ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialPanoramaHorizontalOutlined;
