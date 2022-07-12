import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArticleOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleOutlinedFilled'
      short_name='Article'

      {...props}
    >
      <path d="M7 17H14V15H7ZM7 13H17V11H7ZM7 9H17V7H7ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialArticleOutlinedFilled;
