import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowUpwardRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardRoundedW700'
      short_name='ArrowUpward'

      {...props}
    >
      <path d="M12 20.375Q11.35 20.375 10.888 19.913Q10.425 19.45 10.425 18.8V9.675L6.975 13.125Q6.5 13.6 5.863 13.6Q5.225 13.6 4.75 13.125Q4.275 12.65 4.275 12Q4.275 11.35 4.75 10.875L10.9 4.725Q11.15 4.475 11.425 4.375Q11.7 4.275 12 4.275Q12.3 4.275 12.588 4.375Q12.875 4.475 13.1 4.725L19.25 10.875Q19.725 11.35 19.725 12Q19.725 12.65 19.25 13.125Q18.775 13.6 18.138 13.6Q17.5 13.6 17.025 13.125L13.575 9.675V18.8Q13.575 19.45 13.113 19.913Q12.65 20.375 12 20.375Z"/>
    </Icon>
  )
});

export default IconMaterialArrowUpwardRoundedW700;