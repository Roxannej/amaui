import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDownwardRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardRoundedW700Filled'
      short_name='ArrowDownward'

      {...props}
    >
      <path d="M12 19.725Q11.7 19.725 11.425 19.613Q11.15 19.5 10.9 19.275L4.75 13.125Q4.275 12.65 4.275 12Q4.275 11.35 4.75 10.875Q5.225 10.4 5.863 10.4Q6.5 10.4 6.975 10.875L10.425 14.325V5.175Q10.425 4.525 10.888 4.075Q11.35 3.625 12 3.625Q12.65 3.625 13.113 4.087Q13.575 4.55 13.575 5.2V14.325L17.025 10.875Q17.5 10.4 18.138 10.4Q18.775 10.4 19.25 10.875Q19.725 11.35 19.725 12Q19.725 12.65 19.25 13.125L13.1 19.275Q12.875 19.5 12.588 19.613Q12.3 19.725 12 19.725Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDownwardRoundedW700Filled;