import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVrpanoSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoSharpW700Filled'
      short_name='Vrpano'

      {...props}
    >
      <path d="M5.5 15.4Q7 15.2 8.613 15.1Q10.225 15 12 15Q13.725 15 15.363 15.1Q17 15.2 18.5 15.4L14 10L11.15 13.4L9.15 11ZM1.175 21.65V2.35Q3.6 3.325 6.287 3.987Q8.975 4.65 12 4.65Q15.025 4.65 17.725 3.987Q20.425 3.325 22.85 2.35V21.65Q20.425 20.675 17.725 20.013Q15.025 19.35 12 19.35Q8.975 19.35 6.287 20.013Q3.6 20.675 1.175 21.65Z"/>
    </Icon>
  )
});

export default IconMaterialVrpanoSharpW700Filled;
