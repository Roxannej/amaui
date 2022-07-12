import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks4RoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4RoundedW700Filled'
      short_name='Looks4'

      {...props}
    >
      <path d="M14.2 17Q14.7 17 15.038 16.65Q15.375 16.3 15.375 15.8V8.175Q15.375 7.675 15.038 7.338Q14.7 7 14.2 7Q13.7 7 13.35 7.35Q13 7.7 13 8.2V10.8H11V8.175Q11 7.675 10.65 7.338Q10.3 7 9.8 7Q9.3 7 8.963 7.35Q8.625 7.7 8.625 8.2V12Q8.625 12.5 8.963 12.85Q9.3 13.2 9.8 13.2H13V15.825Q13 16.325 13.35 16.663Q13.7 17 14.2 17ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialLooks4RoundedW700Filled;
