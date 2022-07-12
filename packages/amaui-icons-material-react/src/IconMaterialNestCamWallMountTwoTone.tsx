import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestCamWallMountTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWallMountTwoTone'
      short_name='NestCamWallMount'

      {...props}
    >
      <path d="M4.25 18.875q-1.025 0-1.725-.7-.7-.7-.7-1.725v-10q0-1.025.7-1.737Q3.225 4 4.25 4q1.2 0 1.825.8T6.7 6.7q.9-1.125 2.238-1.788 1.337-.662 2.862-.662 1.35 0 2.575.512 1.225.513 2.15 1.463l3.725 3.7q.475.475.688 1.013.212.537.212 1.137 0 .575-.212 1.113-.213.537-.688 1.012l-5.175 5.2q-.475.45-1 .662-.525.213-1.125.213-.575 0-1.125-.225t-1-.65l-3.75-3.725q-.1-.125-.2-.225t-.175-.225v1.225q0 1.025-.712 1.725-.713.7-1.738.7Z"/>
    </Icon>
  )
});

export default IconMaterialNestCamWallMountTwoTone;