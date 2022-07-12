import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsOutlinedFilled'
      short_name='Drafts'

      {...props}
    >
      <path d="M12 1 21.05 6.4Q21.5 6.675 21.75 7.15Q22 7.625 22 8.15V19Q22 19.825 21.413 20.413Q20.825 21 20 21H4Q3.175 21 2.588 20.413Q2 19.825 2 19V8.15Q2 7.625 2.25 7.15Q2.5 6.675 2.95 6.4ZM12 12.65 19.8 8 12 3.35 4.2 8Z"/>
    </Icon>
  )
});

export default IconMaterialDraftsOutlinedFilled;
