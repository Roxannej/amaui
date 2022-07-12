import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksOneRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneRoundedW700Filled'
      short_name='LooksOne'

      {...props}
    >
      <path d="M12.8 17Q13.3 17 13.65 16.65Q14 16.3 14 15.8V8.2Q14 7.7 13.65 7.35Q13.3 7 12.8 7H10.775Q10.275 7 9.95 7.35Q9.625 7.7 9.625 8.2Q9.625 8.7 9.963 9.037Q10.3 9.375 10.8 9.375H11.625V15.825Q11.625 16.325 11.963 16.663Q12.3 17 12.8 17ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialLooksOneRoundedW700Filled;