import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentBankOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankOutlinedFilled'
      short_name='CommentBank'

      {...props}
    >
      <path d="M2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6ZM12.5 11 15 9.5 17.5 11V4H12.5Z"/>
    </Icon>
  )
});

export default IconMaterialCommentBankOutlinedFilled;
