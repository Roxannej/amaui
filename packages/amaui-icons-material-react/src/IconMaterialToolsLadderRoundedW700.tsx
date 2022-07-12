import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsLadderRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLadderRoundedW700'
      short_name='ToolsLadder'

      {...props}
    >
      <path d="M5.95 21.575q-.75 0-1.2-.613-.45-.612-.25-1.337L8.95 3.55q.15-.5.562-.813.413-.312.913-.312.775 0 1.225.612.45.613.25 1.338l-.275 1.05h4.4l.525-1.875q.125-.5.563-.813.437-.312.937-.312.75 0 1.2.612.45.613.25 1.338L15.05 20.45q-.15.5-.562.812-.413.313-.913.313-.775 0-1.225-.613-.45-.612-.25-1.337l.275-1.05h-4.4L7.45 20.45q-.125.5-.562.812-.438.313-.938.313Zm4.275-11.15h4.425l.5-1.85h-4.4Zm-1.375 5h4.4l.525-1.85H9.35Z"/>
    </Icon>
  )
});

export default IconMaterialToolsLadderRoundedW700;
