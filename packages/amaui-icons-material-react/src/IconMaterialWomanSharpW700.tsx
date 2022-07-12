import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWomanSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WomanSharpW700'
      short_name='Woman'

      {...props}
    >
      <path d="M9.85 22.275V16.375H6.625L10.45 6.7H13.575L17.375 16.375H14.15V22.275ZM12 5.8Q11.025 5.8 10.325 5.1Q9.625 4.4 9.625 3.425Q9.625 2.45 10.325 1.75Q11.025 1.05 12 1.05Q12.975 1.05 13.675 1.75Q14.375 2.45 14.375 3.425Q14.375 4.4 13.675 5.1Q12.975 5.8 12 5.8Z"/>
    </Icon>
  )
});

export default IconMaterialWomanSharpW700;
