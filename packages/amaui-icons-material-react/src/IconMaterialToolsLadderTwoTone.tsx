import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsLadderTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLadderTwoTone'
      short_name='ToolsLadder'

      {...props}
    >
      <path d="M5.95 21.5q-.725 0-1.15-.587-.425-.588-.225-1.288L9.025 3.55q.125-.475.525-.775.4-.3.875-.3.75 0 1.188.6.437.6.237 1.275l-.3 1.125h4.525l.55-1.925q.1-.475.525-.775.425-.3.9-.3.725 0 1.163.587.437.588.237 1.288L15 20.425q-.15.5-.55.787-.4.288-.875.288-.725 0-1.162-.587-.438-.588-.238-1.288l.275-1.125h-4.5l-.55 1.925q-.125.5-.55.787-.425.288-.9.288Zm4.2-11.025h4.55l.55-1.975H10.7Zm-1.375 5H13.3l.575-1.975H9.3Z"/>
    </Icon>
  )
});

export default IconMaterialToolsLadderTwoTone;