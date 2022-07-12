import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalSplitOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitOutlinedW700'
      short_name='VerticalSplit'

      {...props}
    >
      <path d="M1.625 12.625V15.775H10.3V12.625ZM1.625 17V20.15H10.3V17ZM1.625 8.225V11.375H10.3V8.225ZM1.625 3.85V7H10.3V3.85ZM15.45 7V17ZM12.3 3.85H22.375V20.15H12.3ZM15.45 7V17H19.225V7Z"/>
    </Icon>
  )
});

export default IconMaterialVerticalSplitOutlinedW700;
