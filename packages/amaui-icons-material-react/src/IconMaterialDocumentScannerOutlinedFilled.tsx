import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDocumentScannerOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScannerOutlinedFilled'
      short_name='DocumentScanner'

      {...props}
    >
      <path d="M2 6V1H7V3H4V6ZM20 6V3H17V1H22V6ZM2 23V18H4V21H7V23ZM17 23V21H20V18H22V23ZM7 20Q6.175 20 5.588 19.413Q5 18.825 5 18V6Q5 5.175 5.588 4.588Q6.175 4 7 4H17Q17.825 4 18.413 4.588Q19 5.175 19 6V18Q19 18.825 18.413 19.413Q17.825 20 17 20ZM9 10H15V8H9ZM9 13H15V11H9ZM9 16H15V14H9Z"/>
    </Icon>
  )
});

export default IconMaterialDocumentScannerOutlinedFilled;
