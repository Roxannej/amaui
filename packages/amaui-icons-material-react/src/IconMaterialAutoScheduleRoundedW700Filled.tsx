import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoScheduleRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoScheduleRoundedW700Filled'
      short_name='AutoSchedule'

      {...props}
    >
      <path d="M5.3 22.85q-1.325 0-2.238-.912-.912-.913-.912-2.238V6.3q0-1.325.912-2.238.913-.912 2.238-.912H6v-.725q0-.525.388-.9.387-.375.912-.375t.9.375q.375.375.375.9v.725h6.85v-.725q0-.525.387-.9.388-.375.913-.375t.9.375q.375.375.375.9v.725h.7q1.325 0 2.238.912.912.913.912 2.238v13.4q0 1.325-.912 2.238-.913.912-2.238.912Zm0-3.15h13.4V10H5.3v9.7Zm6.075-1.775L10.6 16.25l-1.675-.75q-.425-.2-.425-.65t.425-.65l1.675-.75.775-1.675q.2-.425.65-.425t.65.425l.75 1.675 1.65.75q.425.2.425.65t-.425.65l-1.65.75-.75 1.675q-.2.425-.65.425t-.65-.425Z"/>
    </Icon>
  )
});

export default IconMaterialAutoScheduleRoundedW700Filled;