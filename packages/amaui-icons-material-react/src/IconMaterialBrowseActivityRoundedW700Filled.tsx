import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseActivityRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityRoundedW700Filled'
      short_name='BrowseActivity'

      {...props}
    >
      <path d="M12 15.25 13.5 12l3.25-1.5L13.5 9 12 5.75 10.5 9l-3.25 1.5L10.5 12Zm-7.7 3.6q-1.325 0-2.238-.912-.912-.913-.912-2.238V5.3q0-1.325.912-2.238.913-.912 2.238-.912h15.4q1.325 0 2.238.912.912.913.912 2.238v10.4q0 1.325-.912 2.238-.913.912-2.238.912Zm-2.9 3.375q-.5 0-.838-.35-.337-.35-.337-.85t.35-.837q.35-.338.85-.338H22.6q.5 0 .838.338.337.337.337.837 0 .5-.35.85t-.85.35Z"/>
    </Icon>
  )
});

export default IconMaterialBrowseActivityRoundedW700Filled;