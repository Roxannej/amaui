import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForumOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumOutlinedW700'
      short_name='Forum'

      {...props}
    >
      <path d="M0.575 17.525V2.05Q0.575 1.375 1.025 0.925Q1.475 0.475 2.15 0.475H15.7Q16.375 0.475 16.825 0.925Q17.275 1.375 17.275 2.05V11.575Q17.275 12.25 16.825 12.7Q16.375 13.15 15.7 13.15H4.975ZM7.125 19.3Q6.425 19.3 5.988 18.85Q5.55 18.4 5.55 17.725V15.15H19.275V5.475H21.85Q22.525 5.475 22.975 5.925Q23.425 6.375 23.425 7.05V23.525L19.2 19.3ZM14.125 3.625H3.725V10.275L4 10H14.125ZM3.725 3.625V10V10.275Z"/>
    </Icon>
  )
});

export default IconMaterialForumOutlinedW700;
