import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeRoundedW700Filled'
      short_name='Grade'

      {...props}
    >
      <path d="M6.975 21.75Q6.5 22.1 6.013 21.775Q5.525 21.45 5.7 20.875L7.625 14.625L2.575 11.025Q2.1 10.675 2.288 10.125Q2.475 9.575 3.05 9.575H9.225L11.225 2.975Q11.325 2.7 11.538 2.562Q11.75 2.425 12 2.425Q12.25 2.425 12.45 2.562Q12.65 2.7 12.75 2.975L14.775 9.575H20.95Q21.525 9.575 21.713 10.125Q21.9 10.675 21.425 11.025L16.375 14.625L18.325 20.875Q18.5 21.45 18.025 21.775Q17.55 22.1 17.075 21.75L12.025 17.925Z"/>
    </Icon>
  )
});

export default IconMaterialGradeRoundedW700Filled;
