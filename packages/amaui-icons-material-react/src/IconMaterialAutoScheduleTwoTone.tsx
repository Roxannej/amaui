import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoScheduleTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoScheduleTwoTone'
      short_name='AutoSchedule'

      {...props}
    >
      <path d="M5.4 22.6q-1.275 0-2.15-.875t-.875-2.15v-13.2q0-1.275.875-2.15T5.4 3.35h.825v-.8q0-.475.375-.838.375-.362.875-.362.475 0 .837.362.363.363.363.838v.8h6.65v-.8q0-.475.375-.838.375-.362.875-.362.475 0 .838.362.362.363.362.838v.8h.825q1.275 0 2.15.875t.875 2.15v13.2q0 1.275-.875 2.15t-2.15.875Zm0-3.025h13.2V10.05H5.4v9.525Zm6.025-1.825-.775-1.625-1.6-.725q-.4-.2-.4-.613 0-.412.4-.612l1.6-.725.75-1.6q.2-.4.625-.4t.625.4l.725 1.6 1.575.725q.4.2.4.612 0 .413-.4.613l-1.575.725-.725 1.625q-.2.4-.612.4-.413 0-.613-.4Z"/>
    </Icon>
  )
});

export default IconMaterialAutoScheduleTwoTone;
