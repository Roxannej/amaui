import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeightTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeightTwoTone'
      short_name='Weight'

      {...props}
    >
      <path d="M12 6.55q.35 0 .588-.238.237-.237.237-.562 0-.35-.237-.588-.238-.237-.588-.237-.325 0-.562.237-.238.238-.238.588 0 .325.238.562.237.238.562.238Zm3.5 0h.575q1.15 0 1.987.725.838.725.988 1.875l1.275 8.825q.2 1.375-.7 2.413-.9 1.037-2.3 1.037H6.675q-1.4 0-2.3-1.037-.9-1.038-.7-2.413L4.95 9.15q.175-1.15 1-1.875.825-.725 1.975-.725h.6q-.075-.2-.087-.388-.013-.187-.013-.412 0-1.475 1.05-2.538Q10.525 2.15 12 2.15q1.475 0 2.538 1.062Q15.6 4.275 15.6 5.75q0 .225-.012.412-.013.188-.088.388Z"/>
    </Icon>
  )
});

export default IconMaterialWeightTwoTone;