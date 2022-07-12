import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeActiveTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveTwoTone'
      short_name='QuietTimeActive'

      {...props}
    >
      <path d="M20.825 18.05 5.975 3.175q.65-.6 1.363-1.125.712-.525 1.262-.825.925-.5 1.85.012.925.513 1.025 1.588.175 1.9.863 3.65.687 1.75 2.037 3.075 1.325 1.325 3.063 1.987 1.737.663 3.612.888 1.05.125 1.613.912.562.788.162 1.663-.375.875-.887 1.637-.513.763-1.113 1.413Zm-1.4 4.95L17.1 20.65q-.925.35-1.925.562-1 .213-2.075.213-2.175 0-4.087-.825-1.913-.825-3.35-2.263Q4.225 16.9 3.4 14.987q-.825-1.912-.825-4.087 0-1.075.213-2.063Q3 7.85 3.35 6.925L1 4.575Q.675 4.25.675 3.787q0-.462.35-.787.325-.35.787-.35.463 0 .788.35l18.425 18.425q.325.325.325.775t-.325.8q-.35.325-.8.325-.45 0-.8-.325Z"/>
    </Icon>
  )
});

export default IconMaterialQuietTimeActiveTwoTone;
