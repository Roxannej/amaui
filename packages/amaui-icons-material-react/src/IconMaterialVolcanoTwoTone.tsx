import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolcanoTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoTwoTone'
      short_name='Volcano'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="16.49,10 12.35,10 10.86,13.74 10.35,15 9,15 7.3,15 5.08,20 19.35,20"/><g><path d="M18,8h-7l-2,5H6l-4,9h20L18,8z M7.3,15H9h1.35l0.5-1.26l1.5-3.74h4.14l2.86,10H5.08L7.3,15z"/></g><g><rect height="4" width="2" x="13" y="1"/></g><g><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.9792 14.2929)" width="4" x="16.24" y="3.76"/></g><g><rect height="4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.5061 8.2929)" width="2" x="8.76" y="2.76"/></g></g></g>
    </Icon>
  );
});

export default IconMaterialVolcanoTwoTone;