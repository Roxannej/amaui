import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditDocumentOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentOutlinedW700'
      short_name='EditDocument'

      {...props}
    >
      <path d="M5.8 22.85q-1.325 0-2.237-.912-.913-.913-.913-2.238V4.3q0-1.325.913-2.238.912-.912 2.237-.912h8.05l6.5 6.5v3.625H17.2V9.3h-5v-5H5.8v15.4h5.6v3.15Zm0-3.15V4.3v15.4Zm11.425-4.55 1.525 1.5-3.225 3.2v.875h.875l3.225-3.2 1.5 1.5-3.85 3.825H13.4v-3.875Zm3.9 3.875-3.9-3.875 1.475-1.475q.475-.475 1.125-.475t1.1.475l1.65 1.65q.475.45.475 1.1 0 .65-.475 1.125Z"/>
    </Icon>
  )
});

export default IconMaterialEditDocumentOutlinedW700;
