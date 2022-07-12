import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceBarRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarRoundedW700Filled'
      short_name='SpaceBar'

      {...props}
    >
      <path d="M4.725 15.85Q4.075 15.85 3.613 15.387Q3.15 14.925 3.15 14.275V10.575Q3.15 9.925 3.613 9.462Q4.075 9 4.725 9Q5.375 9 5.838 9.462Q6.3 9.925 6.3 10.575V12.7H17.7V10.575Q17.7 9.925 18.163 9.462Q18.625 9 19.275 9Q19.925 9 20.388 9.462Q20.85 9.925 20.85 10.575V14.275Q20.85 14.925 20.388 15.387Q19.925 15.85 19.275 15.85Z"/>
    </Icon>
  )
});

export default IconMaterialSpaceBarRoundedW700Filled;
