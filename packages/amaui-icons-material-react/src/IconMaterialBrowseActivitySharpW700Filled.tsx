import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseActivitySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivitySharpW700Filled'
      short_name='BrowseActivity'

      {...props}
    >
      <path d="M12 15.25 13.5 12l3.25-1.5L13.5 9 12 5.75 10.5 9l-3.25 1.5L10.5 12Zm-10.85 3.6V2.15h21.7v16.7Zm-.925 3.375V19.85h23.55v2.375Z"/>
    </Icon>
  )
});

export default IconMaterialBrowseActivitySharpW700Filled;
