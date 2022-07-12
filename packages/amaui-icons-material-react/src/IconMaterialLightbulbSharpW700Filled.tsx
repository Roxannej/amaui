import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightbulbSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbSharpW700Filled'
      short_name='Lightbulb'

      {...props}
    >
      <path d="M12 23.525Q11.05 23.525 10.375 22.775Q9.7 22.025 9.7 20.925H14.3Q14.3 22.025 13.625 22.775Q12.95 23.525 12 23.525ZM7.775 19.725V17.35H16.225V19.725ZM8.025 16.15Q6.075 14.975 4.863 13.037Q3.65 11.1 3.65 8.8Q3.65 5.325 6.088 2.9Q8.525 0.475 12 0.475Q15.475 0.475 17.913 2.9Q20.35 5.325 20.35 8.8Q20.35 11.125 19.138 13.05Q17.925 14.975 15.975 16.15Z"/>
    </Icon>
  )
});

export default IconMaterialLightbulbSharpW700Filled;
