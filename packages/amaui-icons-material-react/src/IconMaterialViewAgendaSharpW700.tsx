import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewAgendaSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAgendaSharpW700'
      short_name='ViewAgenda'

      {...props}
    >
      <path d="M2.15 22.35V12.8H21.85V22.35ZM5.3 19.2H18.7V15.95H5.3ZM2.15 11.2V1.65H21.85V11.2ZM5.3 8.05H18.7V4.8H5.3ZM5.3 15.95V19.2ZM5.3 4.8V8.05Z"/>
    </Icon>
  )
});

export default IconMaterialViewAgendaSharpW700;
