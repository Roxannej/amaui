import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderZipTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipTwoTone'
      short_name='FolderZip'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M16,16h2v-2h-2v-2h2v-2h-2V8h4v10h-4V16z M16,16h-2v2H4V6h5.17l2,2H14v2h2v2h-2v2h2V16z" opacity=".3"/><path d="M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M16,16h2v-2h-2v-2 h2v-2h-2V8h4v10h-4V16z M16,16h-2v2H4V6h5.17l2,2H14v2h2v2h-2v2h2V16z"/></g>
    </Icon>
  )
});

export default IconMaterialFolderZipTwoTone;
