import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWashSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WashSharpW700Filled'
      short_name='Wash'

      {...props}
    >
      <path d="M19.575 7.7Q18.375 7.7 17.538 6.85Q16.7 6 16.7 4.8Q16.7 4.075 17.15 3.175Q17.6 2.275 18.15 1.5Q18.775 0.575 19.575 -0.375Q20.375 0.575 21.025 1.5Q21.55 2.275 22 3.175Q22.45 4.075 22.45 4.8Q22.45 6 21.613 6.85Q20.775 7.7 19.575 7.7ZM13.8 8.85Q13.075 8.85 12.575 8.35Q12.075 7.85 12.075 7.125Q12.075 6.75 12.338 6.262Q12.6 5.775 12.95 5.3Q13.325 4.775 13.8 4.225Q14.275 4.775 14.675 5.3Q15 5.775 15.262 6.262Q15.525 6.75 15.525 7.125Q15.525 7.85 15.025 8.35Q14.525 8.85 13.8 8.85ZM-0.85 25.225V13L8.75 3.9L10.925 6.175L8.875 9.775H21.525V13.125H12.3V13.8H23.85V17.15H12.3V17.85H22.675V21.175H12.3V21.875H20.375V25.225Z"/>
    </Icon>
  )
});

export default IconMaterialWashSharpW700Filled;
