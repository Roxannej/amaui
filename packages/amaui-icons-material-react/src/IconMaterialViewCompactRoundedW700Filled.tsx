import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactRoundedW700Filled'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M22.85 9.425Q22.85 10.075 22.388 10.537Q21.925 11 21.275 11H2.725Q2.075 11 1.613 10.537Q1.15 10.075 1.15 9.425V4.725Q1.15 4.075 1.613 3.612Q2.075 3.15 2.725 3.15H21.275Q21.925 3.15 22.388 3.612Q22.85 4.075 22.85 4.725ZM11.65 20.85Q11 20.85 10.538 20.388Q10.075 19.925 10.075 19.275V14.575Q10.075 13.925 10.538 13.462Q11 13 11.65 13H21.275Q21.925 13 22.388 13.462Q22.85 13.925 22.85 14.575V19.275Q22.85 19.925 22.388 20.388Q21.925 20.85 21.275 20.85ZM2.725 20.85Q2.075 20.85 1.613 20.388Q1.15 19.925 1.15 19.275V14.575Q1.15 13.925 1.613 13.462Q2.075 13 2.725 13H6.5Q7.15 13 7.613 13.462Q8.075 13.925 8.075 14.575V19.275Q8.075 19.925 7.613 20.388Q7.15 20.85 6.5 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialViewCompactRoundedW700Filled;