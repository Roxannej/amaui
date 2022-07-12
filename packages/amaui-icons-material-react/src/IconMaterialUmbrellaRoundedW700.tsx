import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUmbrellaRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UmbrellaRoundedW700'
      short_name='Umbrella'

      {...props}
    >
      <path d="M12 24.45Q11.175 24.45 10.55 24.025Q9.925 23.6 9.65 22.8L4.125 6.475Q3.95 6 4.3 5.65Q4.65 5.3 5.125 5.45L8.65 6.55L10.425 5.475V2.65Q10.425 1.15 11.4 0.187Q12.375 -0.775 13.875 -0.775Q15.25 -0.775 16.075 -0.125Q16.9 0.525 17.1 1.55Q17.3 2.475 16.812 3.087Q16.325 3.7 15.45 3.7Q14.95 3.7 14.6 3.437Q14.25 3.175 14.175 2.65Q14.15 2.475 14.075 2.412Q14 2.35 13.875 2.35Q13.75 2.35 13.663 2.437Q13.575 2.525 13.575 2.65V5.475L15.35 6.55L18.875 5.45Q19.35 5.3 19.7 5.65Q20.05 6 19.875 6.475L14.35 22.8Q14.075 23.6 13.45 24.025Q12.825 24.45 12 24.45ZM13.575 15.225 15.525 9.475 14.65 9.6 13.575 9.1ZM10.425 15.25V9.125L9.35 9.625L8.5 9.5Z"/>
    </Icon>
  )
});

export default IconMaterialUmbrellaRoundedW700;
