import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepeatOnSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOnSharpW700'
      short_name='RepeatOn'

      {...props}
    >
      <path d="M3.775 23.375Q2.45 23.375 1.538 22.462Q0.625 21.55 0.625 20.225V3.775Q0.625 2.45 1.538 1.537Q2.45 0.625 3.775 0.625H20.225Q21.55 0.625 22.462 1.537Q23.375 2.45 23.375 3.775V20.225Q23.375 21.55 22.462 22.462Q21.55 23.375 20.225 23.375ZM7 22.275 8.675 20.55 7.3 19.2H19.2V12.8H16.8V16.8H7.3L8.675 15.45L7 13.725L2.725 18ZM4.8 11.2H7.2V7.2H16.7L15.325 8.55L17 10.275L21.275 6L17 1.725L15.325 3.45L16.7 4.8H4.8Z"/>
    </Icon>
  )
});

export default IconMaterialRepeatOnSharpW700;
