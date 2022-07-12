import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftRoundedW700Filled'
      short_name='Draft'

      {...props}
    >
      <path d="M6.3 22.85Q4.975 22.85 4.062 21.938Q3.15 21.025 3.15 19.7V4.3Q3.15 2.975 4.062 2.062Q4.975 1.15 6.3 1.15H13.05Q13.675 1.15 14.263 1.4Q14.85 1.65 15.275 2.075L19.925 6.725Q20.35 7.15 20.6 7.737Q20.85 8.325 20.85 8.95V19.7Q20.85 21.025 19.938 21.938Q19.025 22.85 17.7 22.85ZM14.275 9.3H17.7L12.7 4.3V7.725Q12.7 8.375 13.163 8.837Q13.625 9.3 14.275 9.3Z"/>
    </Icon>
  )
});

export default IconMaterialDraftRoundedW700Filled;
