import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsLevelSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLevelSharpW700'
      short_name='ToolsLevel'

      {...props}
    >
      <path d="M4.4 17.75q-1.325 0-2.237-.913-.913-.912-.913-2.237V9.4q0-1.325.913-2.238.912-.912 2.237-.912h15.2q1.325 0 2.237.912.913.913.913 2.238v5.2q0 1.325-.913 2.237-.912.913-2.237.913Zm0-3.15h15.2V9.4h-1.15q.025.15.038.3.012.15.012.3 0 1.425-1.038 2.462Q16.425 13.5 15 13.5H9q-1.425 0-2.463-1.038Q5.5 11.425 5.5 10q0-.15.013-.3.012-.15.037-.3H4.4v5.2Zm4.6-4h1.55V9.4H9q-.225 0-.412.175Q8.4 9.75 8.4 10q0 .225.188.412.187.188.412.188Zm4.45 0H15q.25 0 .425-.188.175-.187.175-.412 0-.25-.175-.425T15 9.4h-1.55Zm6.15 4H4.4h15.2Z"/>
    </Icon>
  )
});

export default IconMaterialToolsLevelSharpW700;
