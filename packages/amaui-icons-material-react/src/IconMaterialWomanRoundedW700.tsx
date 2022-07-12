import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWomanRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WomanRoundedW700'
      short_name='Woman'

      {...props}
    >
      <path d="M11.425 22.275Q10.775 22.275 10.312 21.812Q9.85 21.35 9.85 20.7V16.375H8.925Q8.1 16.375 7.638 15.688Q7.175 15 7.475 14.225L9.9 8.1Q10.175 7.45 10.75 7.075Q11.325 6.7 12 6.7Q12.675 6.7 13.25 7.075Q13.825 7.45 14.1 8.1L16.525 14.225Q16.825 15 16.363 15.688Q15.9 16.375 15.075 16.375H14.15V20.7Q14.15 21.35 13.688 21.812Q13.225 22.275 12.575 22.275ZM12 5.8Q11.025 5.8 10.325 5.1Q9.625 4.4 9.625 3.425Q9.625 2.45 10.325 1.75Q11.025 1.05 12 1.05Q12.975 1.05 13.675 1.75Q14.375 2.45 14.375 3.425Q14.375 4.4 13.675 5.1Q12.975 5.8 12 5.8Z"/>
    </Icon>
  )
});

export default IconMaterialWomanRoundedW700;