import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipSharpW700'
      short_name='Flip'

      {...props}
    >
      <path d="M2.15 21.85V2.15H8.875V5.3H5.3V18.7H8.875V21.85ZM10.5 23.775V0.225H13.65V23.775ZM18.7 5.3V2.15H21.85V5.3ZM18.7 13.15V10.85H21.85V13.15ZM18.7 21.85V18.7H21.85V21.85ZM18.7 9.225V6.925H21.85V9.225ZM18.7 17.075V14.775H21.85V17.075ZM15.275 21.85V18.7H17.075V21.85ZM15.275 5.3V2.15H17.075V5.3Z"/>
    </Icon>
  )
});

export default IconMaterialFlipSharpW700;
