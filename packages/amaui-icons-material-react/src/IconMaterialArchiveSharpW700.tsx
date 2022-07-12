import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchiveSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveSharpW700'
      short_name='Archive'

      {...props}
    >
      <path d="M2.15 21.85V5.125L4.925 1.85H19.075L21.85 5.125V21.85ZM5.55 6H18.45L17.6 5H6.4ZM5.3 18.7H18.7V8H5.3ZM12 17.8 16.45 13.375 14.725 11.6 13.25 13.075V8.925H10.75V13.075L9.275 11.6L7.55 13.375ZM5.3 18.7V8V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialArchiveSharpW700;
