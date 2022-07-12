import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForumRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumRoundedW700Filled'
      short_name='Forum'

      {...props}
    >
      <path d="M0.575 15.6V2.05Q0.575 1.375 1.025 0.925Q1.475 0.475 2.15 0.475H15.7Q16.375 0.475 16.825 0.925Q17.275 1.375 17.275 2.05V11.575Q17.275 12.25 16.825 12.7Q16.375 13.15 15.7 13.15H4.975L1.95 16.175Q1.575 16.55 1.075 16.35Q0.575 16.15 0.575 15.6ZM7.125 19.3Q6.425 19.3 5.988 18.85Q5.55 18.4 5.55 17.725V15.15H19.275V5.475H21.85Q22.525 5.475 22.975 5.925Q23.425 6.375 23.425 7.05V21.575Q23.425 22.125 22.925 22.337Q22.425 22.55 22.05 22.175L19.2 19.3Z"/>
    </Icon>
  )
});

export default IconMaterialForumRoundedW700Filled;