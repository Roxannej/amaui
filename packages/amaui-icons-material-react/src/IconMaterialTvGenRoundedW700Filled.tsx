import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvGenRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGenRoundedW700Filled'
      short_name='TvGen'

      {...props}
    >
      <path d="M3.425 21.775v-2.65l.95.725q-1.375 0-2.3-.937-.925-.938-.925-2.213V6.325q0-1.3.925-2.225T4.3 3.175h15.4q1.3 0 2.225.925t.925 2.225V16.7q0 1.275-.925 2.2-.925.925-2.275.95l.925-.725v2.65h-2l-.6-1.925H6.05l-.625 1.925Z"/>
    </Icon>
  )
});

export default IconMaterialTvGenRoundedW700Filled;
