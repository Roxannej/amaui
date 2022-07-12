import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHikingSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HikingSharpW700Filled'
      short_name='Hiking'

      {...props}
    >
      <path d="M13.5 5.125Q12.525 5.125 11.825 4.412Q11.125 3.7 11.125 2.725Q11.125 1.75 11.825 1.05Q12.525 0.35 13.5 0.35Q14.475 0.35 15.175 1.05Q15.875 1.75 15.875 2.725Q15.875 3.7 15.175 4.412Q14.475 5.125 13.5 5.125ZM6.525 23.575 9.7 7.6Q9.875 6.725 10.5 6.287Q11.125 5.85 11.85 5.85Q12.5 5.85 13.1 6.15Q13.7 6.45 14.05 7.025L15.025 8.625Q15.475 9.375 15.988 9.825Q16.5 10.275 17.125 10.475V8.65H19.375V23.575H17.125V13.375Q16.2 13.175 15.338 12.712Q14.475 12.25 13.725 11.525L13.325 13.6L15.375 15.55V23.575H12.625V17.4L11.125 15.975L9.4 23.575ZM6.475 14.175 8.075 6.2 4.225 5.375 2.7 13.375Z"/>
    </Icon>
  )
});

export default IconMaterialHikingSharpW700Filled;
