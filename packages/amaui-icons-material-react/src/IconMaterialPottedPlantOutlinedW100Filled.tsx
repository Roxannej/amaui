import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPottedPlantOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantOutlinedW100Filled'
      short_name='PottedPlant'

      {...props}
    >
      <path d="M9.3 20.7q-.5 0-.9-.313-.4-.312-.55-.812l-1-3.925h10.3l-1 3.925q-.15.5-.55.812-.4.313-.9.313ZM12 8.875q.25-1.8 1.525-3.075Q14.8 4.525 16.6 4.3q-.225 1.675-1.412 2.937Q14 8.5 12.35 8.85v2.45h6.9v2.15q0 .625-.438 1.062-.437.438-1.062.438H6.3q-.625 0-1.062-.438-.438-.437-.438-1.062V11.3h6.85V8.85Q10 8.5 8.825 7.25 7.65 6 7.4 4.3q1.8.225 3.075 1.5Q11.75 7.075 12 8.875Z"/>
    </Icon>
  )
});

export default IconMaterialPottedPlantOutlinedW100Filled;