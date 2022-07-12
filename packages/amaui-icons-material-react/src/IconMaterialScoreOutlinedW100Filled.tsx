import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreOutlinedW100Filled'
      short_name='Score'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM12.4 11.6H13.1V6.4H12.4ZM15.3 11.6H16.2L14 9L16.2 6.4H15.3L13.1 9ZM7.4 11.6H10.6V10.9H8.1V9.35H10.6V6.4H7.4V7.1H9.9V8.65H7.4ZM19 12.5V11.5L13 17.5L9 13.5L5 17.5V18.5L9 14.5L13 18.5Z"/>
    </Icon>
  )
});

export default IconMaterialScoreOutlinedW100Filled;