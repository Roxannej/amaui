import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentRoundedFilled'
      short_name='Comment'

      {...props}
    >
      <path d="M7 14H17Q17.425 14 17.712 13.712Q18 13.425 18 13Q18 12.575 17.712 12.287Q17.425 12 17 12H7Q6.575 12 6.287 12.287Q6 12.575 6 13Q6 13.425 6.287 13.712Q6.575 14 7 14ZM7 11H17Q17.425 11 17.712 10.712Q18 10.425 18 10Q18 9.575 17.712 9.287Q17.425 9 17 9H7Q6.575 9 6.287 9.287Q6 9.575 6 10Q6 10.425 6.287 10.712Q6.575 11 7 11ZM7 8H17Q17.425 8 17.712 7.713Q18 7.425 18 7Q18 6.575 17.712 6.287Q17.425 6 17 6H7Q6.575 6 6.287 6.287Q6 6.575 6 7Q6 7.425 6.287 7.713Q6.575 8 7 8ZM20.3 20.3 18 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V19.575Q22 20.25 21.388 20.512Q20.775 20.775 20.3 20.3Z"/>
    </Icon>
  )
});

export default IconMaterialCommentRoundedFilled;