import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditDocumentRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentRoundedW700Filled'
      short_name='EditDocument'

      {...props}
    >
      <path d="M5.8 22.85q-1.325 0-2.237-.912-.913-.913-.913-2.238V4.3q0-1.325.913-2.238.912-.912 2.237-.912h6.75q.625 0 1.2.237.575.238 1.025.688l4.65 4.65q.45.45.688 1.025.237.575.237 1.2v1.1l-8.95 9v3.8Zm8.4 0q-.325 0-.563-.237-.237-.238-.237-.563V20.5q0-.325.112-.6.113-.275.338-.5l5.225-5.25 3 3-5.225 5.225q-.225.225-.5.35-.275.125-.6.125Zm8.6-6.425-3-3 .725-.725q.475-.475 1.113-.475.637 0 1.112.475l.775.775q.475.475.475 1.112 0 .638-.475 1.113ZM13.775 9.3H17.2l-5-5v3.425q0 .65.463 1.112.462.463 1.112.463Z"/>
    </Icon>
  )
});

export default IconMaterialEditDocumentRoundedW700Filled;
