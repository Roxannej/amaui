import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVignetteRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteRoundedW700'
      short_name='Vignette'

      {...props}
    >
      <path d="M12 16Q14.45 16 16.225 14.812Q18 13.625 18 12Q18 10.375 16.225 9.188Q14.45 8 12 8Q9.55 8 7.775 9.188Q6 10.375 6 12Q6 13.625 7.775 14.812Q9.55 16 12 16ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V17.7Q22.85 19.025 21.938 19.938Q21.025 20.85 19.7 20.85ZM4.3 17.7Q4.3 17.7 4.3 17.7Q4.3 17.7 4.3 17.7V6.3Q4.3 6.3 4.3 6.3Q4.3 6.3 4.3 6.3Q4.3 6.3 4.3 6.3Q4.3 6.3 4.3 6.3V17.7Q4.3 17.7 4.3 17.7Q4.3 17.7 4.3 17.7ZM4.3 17.7H19.7Q19.7 17.7 19.7 17.7Q19.7 17.7 19.7 17.7V6.3Q19.7 6.3 19.7 6.3Q19.7 6.3 19.7 6.3H4.3Q4.3 6.3 4.3 6.3Q4.3 6.3 4.3 6.3V17.7Q4.3 17.7 4.3 17.7Q4.3 17.7 4.3 17.7Z"/>
    </Icon>
  )
});

export default IconMaterialVignetteRoundedW700;