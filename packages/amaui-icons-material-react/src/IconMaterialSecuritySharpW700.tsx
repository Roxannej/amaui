import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSecuritySharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecuritySharpW700'
      short_name='Security'

      {...props}
    >
      <path d="M12 22.875Q8.15 21.925 5.65 18.562Q3.15 15.2 3.15 11.1V4.425L12 1.125L20.85 4.425V11.1Q20.85 15.2 18.35 18.562Q15.85 21.925 12 22.875ZM12 19.625Q14.25 18.725 15.812 16.663Q17.375 14.6 17.65 12H12V4.475L6.3 6.6V11.1Q6.3 11.325 6.3 11.55Q6.3 11.775 6.35 12H12Z"/>
    </Icon>
  )
});

export default IconMaterialSecuritySharpW700;
