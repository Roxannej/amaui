import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileDownloadTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadTwoTone'
      short_name='FileDownload'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="14.17,11 13,11 13,5 11,5 11,11 9.83,11 12,13.17"/><rect height="2" width="14" x="5" y="18"/><path d="M19,9h-4V3H9v6H5l7,7L19,9z M11,11V5h2v6h1.17L12,13.17L9.83,11H11z"/></g></g>
    </Icon>
  );
});

export default IconMaterialFileDownloadTwoTone;