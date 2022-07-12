import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimRoundedW700Filled'
      short_name='NoSim'

      {...props}
    >
      <path d="M20.875 17.025 7.325 3.5 8.975 1.85Q9.325 1.5 9.763 1.325Q10.2 1.15 10.675 1.15H17.725Q19.05 1.15 19.962 2.062Q20.875 2.975 20.875 4.3ZM6.325 22.85Q5 22.85 4.088 21.938Q3.175 21.025 3.175 19.7V8.65Q3.175 8.175 3.35 7.737Q3.525 7.3 3.875 6.95L4.225 6.6L1 3.35Q0.65 3 0.663 2.525Q0.675 2.05 1.025 1.7Q1.375 1.35 1.863 1.35Q2.35 1.35 2.7 1.7L22.375 21.35Q22.725 21.7 22.713 22.175Q22.7 22.65 22.35 23Q22 23.35 21.513 23.35Q21.025 23.35 20.675 23L19.75 22.075Q19.325 22.45 18.838 22.65Q18.35 22.85 17.725 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialNoSimRoundedW700Filled;
