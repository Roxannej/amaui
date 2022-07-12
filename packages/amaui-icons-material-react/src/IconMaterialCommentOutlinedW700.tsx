import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentOutlinedW700'
      short_name='Comment'

      {...props}
    >
      <path d="M6 14H18V12H6ZM6 11H18V9H6ZM6 8H18V6H6ZM22.85 22.85 18.85 18.85H4.3Q2.975 18.85 2.062 17.938Q1.15 17.025 1.15 15.7V4.3Q1.15 2.975 2.062 2.062Q2.975 1.15 4.3 1.15H19.7Q21.025 1.15 21.938 2.062Q22.85 2.975 22.85 4.3ZM4.3 4.3V15.7Q4.3 15.7 4.3 15.7Q4.3 15.7 4.3 15.7H19.425L19.7 15.975V4.3Q19.7 4.3 19.7 4.3Q19.7 4.3 19.7 4.3H4.3Q4.3 4.3 4.3 4.3Q4.3 4.3 4.3 4.3ZM4.3 4.3V15.975V15.7Q4.3 15.7 4.3 15.7Q4.3 15.7 4.3 15.7V4.3Q4.3 4.3 4.3 4.3Q4.3 4.3 4.3 4.3Q4.3 4.3 4.3 4.3Q4.3 4.3 4.3 4.3Z"/>
    </Icon>
  )
});

export default IconMaterialCommentOutlinedW700;