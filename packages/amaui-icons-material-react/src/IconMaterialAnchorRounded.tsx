import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAnchorRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnchorRounded'
      short_name='Anchor'

      {...props}
    >
      <path d="M12 22Q10.475 22 8.875 21.45Q7.275 20.9 5.975 19.95Q4.675 19 3.837 17.725Q3 16.45 3 15V13Q3 12.7 3.275 12.55Q3.55 12.4 3.8 12.6L6.55 14.65Q6.75 14.775 6.763 15Q6.775 15.225 6.6 15.4L5.45 16.55Q6.175 17.825 7.75 18.75Q9.325 19.675 11 19.925V11H9Q8.575 11 8.288 10.712Q8 10.425 8 10Q8 9.575 8.288 9.287Q8.575 9 9 9H11V7.825Q10.125 7.5 9.562 6.737Q9 5.975 9 5Q9 3.75 9.875 2.875Q10.75 2 12 2Q13.25 2 14.125 2.875Q15 3.75 15 5Q15 5.975 14.438 6.737Q13.875 7.5 13 7.825V9H15Q15.425 9 15.713 9.287Q16 9.575 16 10Q16 10.425 15.713 10.712Q15.425 11 15 11H13V19.925Q14.675 19.675 16.25 18.75Q17.825 17.825 18.55 16.55L17.4 15.4Q17.225 15.225 17.238 15Q17.25 14.775 17.45 14.65L20.2 12.6Q20.45 12.4 20.725 12.55Q21 12.7 21 13V15Q21 16.45 20.163 17.725Q19.325 19 18.025 19.95Q16.725 20.9 15.125 21.45Q13.525 22 12 22ZM12 6Q12.425 6 12.713 5.713Q13 5.425 13 5Q13 4.575 12.713 4.287Q12.425 4 12 4Q11.575 4 11.288 4.287Q11 4.575 11 5Q11 5.425 11.288 5.713Q11.575 6 12 6Z"/>
    </Icon>
  )
});

export default IconMaterialAnchorRounded;
