import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentBankTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankTwoTone'
      short_name='CommentBank'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,18l2-2h14V4H4V18z M13,6h5v8l-2.5-1.5L13,14V6z" opacity=".3"/><polygon points="18,14 18,6 13,6 13,14 15.5,12.5"/><path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H6l-2,2V4h16V16z"/></g></g>
    </Icon>
  )
});

export default IconMaterialCommentBankTwoTone;
