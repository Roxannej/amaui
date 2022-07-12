import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClarifyTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClarifyTwoTone'
      short_name='Clarify'

      {...props}
    >
      <path d="M4.425 21.625Q3.175 21.625 2.288 20.738Q1.4 19.85 1.4 18.6V5.4Q1.4 4.15 2.288 3.262Q3.175 2.375 4.425 2.375H19.575Q20.825 2.375 21.713 3.262Q22.6 4.15 22.6 5.4V18.6Q22.6 19.85 21.713 20.738Q20.825 21.625 19.575 21.625ZM4.425 18.6H19.575Q19.575 18.6 19.575 18.6Q19.575 18.6 19.575 18.6V5.4Q19.575 5.4 19.575 5.4Q19.575 5.4 19.575 5.4H4.425Q4.425 5.4 4.425 5.4Q4.425 5.4 4.425 5.4V18.6Q4.425 18.6 4.425 18.6Q4.425 18.6 4.425 18.6ZM6.3 8.85V6.975H13V8.85ZM6.3 12.925V11.05H13V12.925ZM6.3 17.025V15.15H13V17.025ZM15.825 17.025V6.975H17.7V17.025Z"/>
    </Icon>
  )
});

export default IconMaterialClarifyTwoTone;
