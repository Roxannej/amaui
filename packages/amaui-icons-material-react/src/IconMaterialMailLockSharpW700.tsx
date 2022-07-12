import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailLockSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLockSharpW700'
      short_name='MailLock'

      {...props}
    >
      <path d="M4.3 17.7H16.275V20.85H1.15V3.15H22.85V10.85H21.275H19.7V9.075L12 14.075L4.3 9.075ZM12 11.3 19.7 6.3H4.3ZM4.3 17.7V15.85Q4.3 13.775 4.3 12.312Q4.3 10.85 4.3 10.85V9.075V6.3V9.075ZM18.275 20.85V15.85H19.275V14.85Q19.275 14.025 19.863 13.438Q20.45 12.85 21.275 12.85Q22.1 12.85 22.688 13.438Q23.275 14.025 23.275 14.85V15.85H24.275V20.85ZM20.275 15.85H22.275V14.85Q22.275 14.425 21.988 14.137Q21.7 13.85 21.275 13.85Q20.85 13.85 20.562 14.137Q20.275 14.425 20.275 14.85Z"/>
    </Icon>
  )
});

export default IconMaterialMailLockSharpW700;
