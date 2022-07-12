import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentBankRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankRoundedW700Filled'
      short_name='CommentBank'

      {...props}
    >
      <path d="M1.15 19.05V4.3Q1.15 2.975 2.062 2.062Q2.975 1.15 4.3 1.15H19.7Q21.025 1.15 21.938 2.062Q22.85 2.975 22.85 4.3V15.7Q22.85 17.025 21.938 17.938Q21.025 18.85 19.7 18.85H5.15L3.825 20.175Q3.075 20.925 2.113 20.513Q1.15 20.1 1.15 19.05ZM14.7 9.125 15.975 9.875Q16.375 10.125 16.788 9.887Q17.2 9.65 17.2 9.175V4.3H12.2V9.175Q12.2 9.65 12.613 9.887Q13.025 10.125 13.425 9.875Z"/>
    </Icon>
  )
});

export default IconMaterialCommentBankRoundedW700Filled;