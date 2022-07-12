import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUmbrellaSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UmbrellaSharpW700Filled'
      short_name='Umbrella'

      {...props}
    >
      <path d="M12 24.45Q11.175 24.45 10.55 24.025Q9.925 23.6 9.65 22.8L3.625 4.975L8.65 6.55L10.425 5.5V2.65Q10.425 1.15 11.4 0.187Q12.375 -0.775 13.875 -0.775Q15.375 -0.775 16.363 0.187Q17.35 1.15 17.35 2.65V3.7H14.2V2.65Q14.2 2.525 14.1 2.437Q14 2.35 13.875 2.35Q13.75 2.35 13.663 2.437Q13.575 2.525 13.575 2.65V5.475L15.375 6.55L20.375 4.975L14.35 22.8Q14.075 23.6 13.45 24.025Q12.825 24.45 12 24.45ZM13.575 15.225 15.525 9.475 14.65 9.6 13.575 9.1ZM10.425 15.25V9.125L9.35 9.625L8.5 9.5Z"/>
    </Icon>
  )
});

export default IconMaterialUmbrellaSharpW700Filled;
