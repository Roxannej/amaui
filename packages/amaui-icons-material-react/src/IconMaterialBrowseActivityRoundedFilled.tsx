import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseActivityRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityRoundedFilled'
      short_name='BrowseActivity'

      {...props}
    >
      <path d="m12 15 1.4-3.1 3.1-1.4-3.1-1.4L12 6l-1.4 3.1-3.1 1.4 3.1 1.4Zm-8 3q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Zm-2 3q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h20q.425 0 .712.288.288.287.288.712t-.288.712Q22.425 21 22 21Z"/>
    </Icon>
  )
});

export default IconMaterialBrowseActivityRoundedFilled;
