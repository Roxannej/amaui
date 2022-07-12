import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreOutlinedFilled'
      short_name='Score'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 12H13.5V6H12ZM15.5 12H17.2L15.2 9L17.2 6H15.5L13.5 9ZM7 12H11V10.5H8.5V9.75H11V6H7V7.5H9.5V8.25H7ZM19 13V10.5L13 16.5L9 12.5L5 16.5V19L9 15L13 19Z"/>
    </Icon>
  )
});

export default IconMaterialScoreOutlinedFilled;
