import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthRoundedW700Filled'
      short_name='South'

      {...props}
    >
      <path d="M12 21.925Q11.7 21.925 11.425 21.825Q11.15 21.725 10.9 21.475L5.25 15.825Q4.8 15.375 4.8 14.712Q4.8 14.05 5.25 13.6Q5.7 13.15 6.35 13.15Q7 13.15 7.45 13.6L10.425 16.575V2.75Q10.425 2.1 10.888 1.65Q11.35 1.2 12 1.2Q12.65 1.2 13.113 1.662Q13.575 2.125 13.575 2.775V16.575L16.55 13.6Q17 13.15 17.65 13.15Q18.3 13.15 18.75 13.6Q19.2 14.05 19.2 14.712Q19.2 15.375 18.75 15.825L13.1 21.475Q12.85 21.725 12.575 21.825Q12.3 21.925 12 21.925Z"/>
    </Icon>
  )
});

export default IconMaterialSouthRoundedW700Filled;
