import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigationRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationRoundedW700Filled'
      short_name='Navigation'

      {...props}
    >
      <path d="M5.975 22.025Q5.45 22.25 4.888 22.15Q4.325 22.05 3.9 21.625Q3.475 21.2 3.388 20.65Q3.3 20.1 3.525 19.575L10.575 3.7Q11 2.75 12.012 2.75Q13.025 2.75 13.45 3.7L20.5 19.575Q20.725 20.1 20.625 20.65Q20.525 21.2 20.1 21.625Q19.675 22.05 19.113 22.15Q18.55 22.25 18.025 22.025L12 19.45Z"/>
    </Icon>
  )
});

export default IconMaterialNavigationRoundedW700Filled;