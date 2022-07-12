import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseActivityRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityRoundedW700'
      short_name='BrowseActivity'

      {...props}
    >
      <path d="M12 15.25 13.5 12l3.25-1.5L13.5 9 12 5.75 10.5 9l-3.25 1.5L10.5 12Zm-7.7 3.6q-1.325 0-2.238-.912-.912-.913-.912-2.238V5.3q0-1.325.912-2.238.913-.912 2.238-.912h15.4q1.325 0 2.238.912.912.913.912 2.238v10.4q0 1.325-.912 2.238-.913.912-2.238.912Zm0-3.15h15.4V5.3H4.3v10.4Zm-2.9 6.525q-.5 0-.838-.35-.337-.35-.337-.85t.35-.837q.35-.338.85-.338H22.6q.5 0 .838.338.337.337.337.837 0 .5-.35.85t-.85.35ZM4.3 15.7V5.3v10.4Z"/>
    </Icon>
  )
});

export default IconMaterialBrowseActivityRoundedW700;
