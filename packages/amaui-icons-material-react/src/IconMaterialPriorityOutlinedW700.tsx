import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriorityOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityOutlinedW700'
      short_name='Priority'

      {...props}
    >
      <path d="M9 21.85Q6.15 21.85 4.15 19.85Q2.15 17.85 2.15 15V9Q2.15 6.15 4.15 4.15Q6.15 2.15 9 2.15H15Q17.85 2.15 19.85 4.15Q21.85 6.15 21.85 9V15Q21.85 17.85 19.85 19.85Q17.85 21.85 15 21.85ZM10.925 16.275 17.2 10 15.525 8.325 10.925 12.925 8.725 10.725 7.05 12.4ZM9 18.7H15Q16.55 18.7 17.625 17.625Q18.7 16.55 18.7 15V9Q18.7 7.45 17.625 6.375Q16.55 5.3 15 5.3H9Q7.45 5.3 6.375 6.375Q5.3 7.45 5.3 9V15Q5.3 16.55 6.375 17.625Q7.45 18.7 9 18.7ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialPriorityOutlinedW700;
