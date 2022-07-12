import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditDocumentRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentRoundedW700'
      short_name='EditDocument'

      {...props}
    >
      <path d="M5.8 22.85q-1.325 0-2.237-.912-.913-.913-.913-2.238V4.3q0-1.325.913-2.238.912-.912 2.237-.912h6.75q.625 0 1.2.237.575.238 1.025.688l4.65 4.65q.45.45.688 1.025.237.575.237 1.2v2.325H17.2V9.3h-3.425q-.65 0-1.112-.463-.463-.462-.463-1.112V4.3H5.8v15.4h5.6v3.15Zm0-3.15V4.3v15.4Zm11.425-4.55 1.525 1.5-3.225 3.2v.875h.875l3.225-3.2 1.5 1.5-3.4 3.375q-.225.225-.5.338-.275.112-.6.112H14.2q-.325 0-.563-.225-.237-.225-.237-.575v-2.425q0-.325.112-.6.113-.275.338-.5Zm3.9 3.875-3.9-3.875 1.475-1.475q.475-.475 1.125-.475t1.1.475l1.65 1.65q.475.45.475 1.1 0 .65-.475 1.125Z"/>
    </Icon>
  )
});

export default IconMaterialEditDocumentRoundedW700;