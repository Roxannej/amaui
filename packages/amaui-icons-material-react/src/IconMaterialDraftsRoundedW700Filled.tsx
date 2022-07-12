import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftsRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsRoundedW700Filled'
      short_name='Drafts'

      {...props}
    >
      <path d="M4.3 22.075Q2.975 22.075 2.062 21.163Q1.15 20.25 1.15 18.925V8.65Q1.15 7.725 1.525 6.987Q1.9 6.25 2.75 5.75L10.375 1.2Q10.75 0.975 11.163 0.862Q11.575 0.75 12 0.75Q12.425 0.75 12.838 0.862Q13.25 0.975 13.625 1.2L21.25 5.75Q22.1 6.25 22.475 6.987Q22.85 7.725 22.85 8.65V18.925Q22.85 20.25 21.938 21.163Q21.025 22.075 19.7 22.075ZM12 12.3Q12.2 12.3 12.4 12.25Q12.6 12.2 12.8 12.075L19.275 8.225L12.8 4.375Q12.6 4.25 12.4 4.2Q12.2 4.15 12 4.15Q11.8 4.15 11.6 4.2Q11.4 4.25 11.2 4.375L4.725 8.225L11.2 12.075Q11.4 12.2 11.6 12.25Q11.8 12.3 12 12.3Z"/>
    </Icon>
  )
});

export default IconMaterialDraftsRoundedW700Filled;
