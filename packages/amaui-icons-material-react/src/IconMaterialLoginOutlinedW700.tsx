import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoginOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginOutlinedW700'
      short_name='Login'

      {...props}
    >
      <path d="M9.25 18.2 7.05 15.975 9.45 13.575H1.8V10.425H9.45L7.05 8.025L9.25 5.8L15.45 12ZM11.8 21.85V18.7H19.05Q19.05 18.7 19.05 18.7Q19.05 18.7 19.05 18.7V5.3Q19.05 5.3 19.05 5.3Q19.05 5.3 19.05 5.3H11.8V2.15H19.05Q20.375 2.15 21.288 3.062Q22.2 3.975 22.2 5.3V18.7Q22.2 20.025 21.288 20.938Q20.375 21.85 19.05 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialLoginOutlinedW700;
