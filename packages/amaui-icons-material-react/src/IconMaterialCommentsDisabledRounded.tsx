import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledRounded'
      short_name='CommentsDisabled'

      {...props}
    >
      <path d="M21.2 22.575Q20.9 22.875 20.488 22.875Q20.075 22.875 19.775 22.575L15.175 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4.825Q2 4.825 2 4.825Q2 4.825 2 4.825L1.375 4.2Q1.075 3.9 1.087 3.5Q1.1 3.1 1.4 2.8Q1.7 2.5 2.113 2.5Q2.525 2.5 2.825 2.8L21.2 21.175Q21.5 21.475 21.5 21.875Q21.5 22.275 21.2 22.575ZM22 19.125 18.875 16H20V4Q20 4 20 4Q20 4 20 4H6.875L4.875 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4ZM4 16H13.175L11.175 14H7Q6.575 14 6.287 13.712Q6 13.425 6 13Q6 12.575 6.287 12.287Q6.575 12 7 12H9.175L8.175 11H7Q6.575 11 6.287 10.712Q6 10.425 6 10Q6 9.775 6.113 9.562Q6.225 9.35 6.4 9.2L4 6.825V16Q4 16 4 16Q4 16 4 16ZM16.875 14 14.875 12H17Q17.425 12 17.712 12.287Q18 12.575 18 13Q18 13.425 17.712 13.712Q17.425 14 17 14ZM13.875 11 11.875 9H17Q17.425 9 17.712 9.287Q18 9.575 18 10Q18 10.425 17.712 10.712Q17.425 11 17 11ZM10.875 8 8.875 6H17Q17.425 6 17.712 6.287Q18 6.575 18 7Q18 7.425 17.712 7.713Q17.425 8 17 8ZM8.6 11.4Q8.6 11.4 8.6 11.4Q8.6 11.4 8.6 11.4ZM12.875 10Q12.875 10 12.875 10Q12.875 10 12.875 10Z"/>
    </Icon>
  )
});

export default IconMaterialCommentsDisabledRounded;