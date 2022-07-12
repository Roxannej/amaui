import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightGroupOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupOutlined'
      short_name='LightGroup'

      {...props}
    >
      <path d="M3 22v-2h8v2Zm14-1q-.825 0-1.412-.587Q15 19.825 15 19h-3q-.425 0-.712-.288Q11 18.425 11 18q-.05-2.25 1.4-3.9t3.6-2V2h2v10.1q2.175.35 3.613 2Q23.05 15.75 23 18q0 .425-.288.712Q22.425 19 22 19h-3q0 .825-.575 1.413Q17.85 21 17 21ZM6 19v-8H2q-.5 0-.788-.387-.287-.388-.162-.863l1.875-7q.1-.325.363-.538Q3.55 2 3.9 2h6.225q.35 0 .613.212.262.213.362.538l1.875 7q.125.475-.163.863-.287.387-.787.387H8v8Zm7.1-2h7.8q-.3-1.35-1.4-2.175Q18.4 14 17 14q-1.375 0-2.475.825T13.1 17ZM3.3 9h7.4L9.375 4H4.65ZM7 6.5Zm10 9Z"/>
    </Icon>
  )
});

export default IconMaterialLightGroupOutlined;