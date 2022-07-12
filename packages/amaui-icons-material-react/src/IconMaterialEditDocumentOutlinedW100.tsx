import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditDocumentOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentOutlinedW100'
      short_name='EditDocument'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.85l4.05 4.05v3.475H18V7.7h-3.7V4H6.8q-.3 0-.55.25Q6 4.5 6 4.8v14.4q0 .3.25.55.25.25.55.25h4.25v.7ZM6 20V4v16Zm11.1-5.425.5.475-3.85 3.85v1.05h1.05l3.85-3.85.5.5-4.05 4.05h-2.05v-2.025Zm2.05 2.025-2.05-2.025 1.075-1.075q.225-.2.538-.2.312 0 .512.2l1 1q.2.2.2.512 0 .313-.2.538Z"/>
    </Icon>
  )
});

export default IconMaterialEditDocumentOutlinedW100;