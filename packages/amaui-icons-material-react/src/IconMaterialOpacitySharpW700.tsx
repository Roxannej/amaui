import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpacitySharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpacitySharpW700'
      short_name='Opacity'

      {...props}
    >
      <path d="M12 21.85Q8.35 21.85 5.75 19.325Q3.15 16.8 3.15 13.15Q3.15 11.325 3.838 9.725Q4.525 8.125 5.775 6.925L12 0.8L18.225 6.925Q19.475 8.125 20.163 9.725Q20.85 11.325 20.85 13.15Q20.85 16.8 18.25 19.325Q15.65 21.85 12 21.85ZM6.35 14H17.65Q17.8 12.35 17.363 11.212Q16.925 10.075 16.25 9.425L12 5.225L7.75 9.425Q7.075 10.075 6.638 11.212Q6.2 12.35 6.35 14Z"/>
    </Icon>
  )
});

export default IconMaterialOpacitySharpW700;
