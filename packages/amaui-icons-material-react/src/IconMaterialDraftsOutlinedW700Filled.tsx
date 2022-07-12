import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftsOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsOutlinedW700Filled'
      short_name='Drafts'

      {...props}
    >
      <path d="M12 0.225 21.25 5.75Q22.1 6.25 22.475 6.987Q22.85 7.725 22.85 8.65V18.925Q22.85 20.25 21.938 21.163Q21.025 22.075 19.7 22.075H4.3Q2.975 22.075 2.062 21.163Q1.15 20.25 1.15 18.925V8.65Q1.15 7.725 1.525 6.987Q1.9 6.25 2.75 5.75ZM12 12.575 19.275 8.225 12 3.875 4.725 8.225Z"/>
    </Icon>
  )
});

export default IconMaterialDraftsOutlinedW700Filled;