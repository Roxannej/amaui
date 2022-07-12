import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriorityTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityTwoTone'
      short_name='Priority'

      {...props}
    >
      <path d="M9.05 21.625Q6.275 21.625 4.325 19.675Q2.375 17.725 2.375 14.95V9.05Q2.375 6.275 4.325 4.325Q6.275 2.375 9.05 2.375H14.95Q17.725 2.375 19.675 4.325Q21.625 6.275 21.625 9.05V14.95Q21.625 17.725 19.675 19.675Q17.725 21.625 14.95 21.625ZM10.95 16.15 17.05 10.05 15.475 8.45 10.95 12.975 8.775 10.775 7.175 12.375Z"/>
    </Icon>
  )
});

export default IconMaterialPriorityTwoTone;
