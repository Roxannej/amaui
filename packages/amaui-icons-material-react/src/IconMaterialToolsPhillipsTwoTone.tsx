import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsPhillipsTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPhillipsTwoTone'
      short_name='ToolsPhillips'

      {...props}
    >
      <path d="M6.325 22.25v-3.025H17.7v3.025Zm0-4.15V7.2l4.1-5.475H13.6L17.7 7.2v10.9Zm3.025-7.55 1.275-1.275V6.5L9.35 8.2Zm5.325 0V8.2L13.4 6.5v2.775Z"/>
    </Icon>
  )
});

export default IconMaterialToolsPhillipsTwoTone;
