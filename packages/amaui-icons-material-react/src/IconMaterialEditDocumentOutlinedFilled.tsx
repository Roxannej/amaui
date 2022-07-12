import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditDocumentOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentOutlinedFilled'
      short_name='EditDocument'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v3.1l-8 7.975V22Zm8 0v-2.125l5.15-5.175 2.15 2.1-5.175 5.2Zm8.025-5.9L19.9 13.975l.7-.7q.3-.3.725-.3t.7.3l.7.725q.275.3.275.712 0 .413-.275.688ZM13 9h5l-5-5Z"/>
    </Icon>
  )
});

export default IconMaterialEditDocumentOutlinedFilled;
