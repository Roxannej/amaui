import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAgenderTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AgenderTwoTone'
      short_name='Agender'

      {...props}
    >
      <path d="M12 22.5q-2.775 0-4.763-1.988Q5.25 18.525 5.25 15.75q0-2.425 1.487-4.25Q8.225 9.675 10.5 9.15v-7h3.025v7q2.275.525 3.763 2.337 1.487 1.813 1.487 4.263 0 2.775-1.975 4.762Q14.825 22.5 12 22.5Zm0-3.025q1.2 0 2.125-.663.925-.662 1.325-1.687h-6.9q.4 1.025 1.338 1.687.937.663 2.112.663ZM8.55 14.35h6.9q-.4-1.05-1.325-1.7Q13.2 12 12 12q-1.175 0-2.112.65-.938.65-1.338 1.7Z"/>
    </Icon>
  )
});

export default IconMaterialAgenderTwoTone;