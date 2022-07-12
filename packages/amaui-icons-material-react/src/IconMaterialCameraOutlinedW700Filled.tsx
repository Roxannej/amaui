import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutlinedW700Filled'
      short_name='Camera'

      {...props}
    >
      <path d="M11.325 7.85 14.975 1.575Q17.4 2.275 19.213 3.887Q21.025 5.5 22 7.85ZM8.05 10.55 4.4 4.275Q5.875 2.85 7.825 2Q9.775 1.15 12 1.15Q12.35 1.15 12.725 1.175Q13.1 1.2 13.475 1.25ZM1.5 14.7Q1.325 14.05 1.238 13.387Q1.15 12.725 1.15 12Q1.15 10.1 1.763 8.425Q2.375 6.75 3.425 5.4L8.8 14.7ZM9.05 22.425Q6.625 21.725 4.8 20.113Q2.975 18.5 2 16.15H12.65ZM12 22.85Q11.575 22.85 11.238 22.825Q10.9 22.8 10.55 22.75L15.925 13.45L19.55 19.75Q18.075 21.175 16.15 22.013Q14.225 22.85 12 22.85ZM20.575 18.6 15.2 9.3H22.5Q22.65 9.95 22.75 10.612Q22.85 11.275 22.85 12Q22.85 13.875 22.25 15.55Q21.65 17.225 20.575 18.6Z"/>
    </Icon>
  )
});

export default IconMaterialCameraOutlinedW700Filled;