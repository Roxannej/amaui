import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEastRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastRoundedW700'
      short_name='East'

      {...props}
    >
      <path d="M13.825 18.75Q13.375 18.3 13.375 17.638Q13.375 16.975 13.825 16.525L16.775 13.575H3Q2.35 13.575 1.888 13.112Q1.425 12.65 1.425 12Q1.425 11.35 1.888 10.887Q2.35 10.425 3 10.425H16.775L13.825 7.475Q13.375 7.025 13.387 6.362Q13.4 5.7 13.85 5.25Q14.3 4.8 14.95 4.8Q15.6 4.8 16.05 5.25L21.675 10.875Q21.925 11.125 22.038 11.412Q22.15 11.7 22.15 12Q22.15 12.3 22.05 12.575Q21.95 12.85 21.7 13.1L16.05 18.75Q15.6 19.2 14.938 19.212Q14.275 19.225 13.825 18.75Z"/>
    </Icon>
  )
});

export default IconMaterialEastRoundedW700;
