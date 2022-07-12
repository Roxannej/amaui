import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentBankOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankOutlined'
      short_name='CommentBank'

      {...props}
    >
      <path d="M12.5 11V4H4Q4 4 4 4Q4 4 4 4V17.175L5.175 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H17.5V11L15 9.5ZM2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6ZM4 4Q4 4 4 4Q4 4 4 4V17.175V16Q4 16 4 16Q4 16 4 16V4Q4 4 4 4Q4 4 4 4Z"/>
    </Icon>
  )
});

export default IconMaterialCommentBankOutlined;