import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLivingSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LivingSharpW700'
      short_name='Living'

      {...props}
    >
      <path d="M1.15 22.85V1.15H22.85V22.85ZM4.3 19.7H19.7V4.3H4.3ZM5.3 18H18.7V10.125H17.45V5.875H6.55V10.125H5.3ZM7.2 16.125V11.5H9.2V14.875H14.8V11.5H16.8V16.125ZM11.075 13V9.675H8.45V7.775H15.55V9.675H12.925V13ZM4.3 19.7V4.3V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialLivingSharpW700;
