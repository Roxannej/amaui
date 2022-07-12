import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsPhillipsRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPhillipsRoundedW700'
      short_name='ToolsPhillips'

      {...props}
    >
      <path d="M6.25 22.325v-3.15h11.5v3.15Zm0-4.15v-11l4.125-5.5h3.25l4.125 5.5v11Zm3.15-3.15h5.2v-.55l-2.6-2.6-2.6 2.6Zm0-4.625 1.15-1.15V6.7L9.4 8.225Zm5.2 0V8.225L13.45 6.7v2.55Zm0 4.625H9.4h5.2Z"/>
    </Icon>
  )
});

export default IconMaterialToolsPhillipsRoundedW700;