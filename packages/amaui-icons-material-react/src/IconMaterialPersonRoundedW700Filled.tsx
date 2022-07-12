import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRoundedW700Filled'
      short_name='Person'

      {...props}
    >
      <path d="M12 11.575Q9.975 11.575 8.562 10.162Q7.15 8.75 7.15 6.725Q7.15 4.7 8.562 3.3Q9.975 1.9 12 1.9Q14.025 1.9 15.438 3.3Q16.85 4.7 16.85 6.725Q16.85 8.75 15.438 10.162Q14.025 11.575 12 11.575ZM3.15 21.275V17.575Q3.15 16.5 3.713 15.587Q4.275 14.675 5.225 14.2Q6.85 13.4 8.55 12.987Q10.25 12.575 12 12.575Q13.8 12.575 15.5 12.975Q17.2 13.375 18.775 14.175Q19.725 14.65 20.288 15.55Q20.85 16.45 20.85 17.575V21.275Z"/>
    </Icon>
  )
});

export default IconMaterialPersonRoundedW700Filled;
