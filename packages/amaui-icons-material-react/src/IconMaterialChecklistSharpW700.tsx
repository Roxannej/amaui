import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChecklistSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistSharpW700'
      short_name='Checklist'

      {...props}
    >
      <path d="M13.125 9.575V6.425H22.7V9.575ZM13.125 17.575V14.425H22.7V17.575ZM5.675 11.8 1.3 7.45 3.525 5.25 5.65 7.375 9.9 3.1 12.1 5.35ZM5.675 19.8 1.3 15.45 3.525 13.25 5.65 15.375 9.9 11.1 12.1 13.35Z"/>
    </Icon>
  )
});

export default IconMaterialChecklistSharpW700;
