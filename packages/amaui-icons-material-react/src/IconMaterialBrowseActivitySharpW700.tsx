import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseActivitySharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivitySharpW700'
      short_name='BrowseActivity'

      {...props}
    >
      <path d="M12 15.25 13.5 12l3.25-1.5L13.5 9 12 5.75 10.5 9l-3.25 1.5L10.5 12Zm-10.85 3.6V2.15h21.7v16.7ZM4.3 15.7h15.4V5.3H4.3ZM.225 22.225V19.85h23.55v2.375ZM4.3 15.7V5.3v10.4Z"/>
    </Icon>
  )
});

export default IconMaterialBrowseActivitySharpW700;