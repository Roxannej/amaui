import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWestRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WestRoundedW700'
      short_name='West'

      {...props}
    >
      <path d="M8.175 18.75 2.525 13.1Q2.275 12.85 2.175 12.575Q2.075 12.3 2.075 12Q2.075 11.7 2.175 11.412Q2.275 11.125 2.525 10.875L8.175 5.25Q8.625 4.8 9.288 4.8Q9.95 4.8 10.4 5.25Q10.85 5.7 10.85 6.35Q10.85 7 10.4 7.475L7.45 10.425H21.225Q21.875 10.425 22.337 10.887Q22.8 11.35 22.8 12Q22.8 12.65 22.337 13.112Q21.875 13.575 21.225 13.575H7.45L10.4 16.525Q10.85 16.975 10.85 17.638Q10.85 18.3 10.4 18.75Q9.95 19.225 9.288 19.212Q8.625 19.2 8.175 18.75Z"/>
    </Icon>
  )
});

export default IconMaterialWestRoundedW700;
