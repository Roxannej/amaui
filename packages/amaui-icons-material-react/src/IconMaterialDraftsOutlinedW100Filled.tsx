import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftsOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsOutlinedW100Filled'
      short_name='Drafts'

      {...props}
    >
      <path d="M12 2.55 20.35 7.5Q20.5 7.625 20.6 7.787Q20.7 7.95 20.7 8.15V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7H4.8Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V8.15Q3.3 7.95 3.4 7.787Q3.5 7.625 3.65 7.5ZM12 12.65 19.8 8 12 3.35 4.2 8Z"/>
    </Icon>
  )
});

export default IconMaterialDraftsOutlinedW100Filled;