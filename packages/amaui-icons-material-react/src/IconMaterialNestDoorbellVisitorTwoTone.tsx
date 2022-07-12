import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestDoorbellVisitorTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDoorbellVisitorTwoTone'
      short_name='NestDoorbellVisitor'

      {...props}
    >
      <path d="M12 24.225q-2.7 0-4.575-1.875T5.55 17.775V6.225q0-2.725 1.875-4.6Q9.3-.25 12.025-.25q2.725 0 4.588 1.875 1.862 1.875 1.862 4.6V12h-3.45q-1.275 0-2.15.787Q12 13.575 12 14.25v.175q-.95 0-1.625.7t-.675 1.65q0 .925.675 1.625t1.625.675Zm1.5 0v-.875q0-1.3 1.25-2.125T18 20.4q2 0 3.263.825 1.262.825 1.262 2.125v.875Zm4.5-4.95q-1.05 0-1.775-.725-.725-.725-.725-1.775 0-1.05.725-1.787.725-.738 1.775-.738 1.05 0 1.788.738.737.737.737 1.787 0 1.05-.737 1.775-.738.725-1.788.725Zm-6-1.9q-.275 0-.45-.187-.175-.188-.175-.413 0-.225.175-.425.175-.2.45-.2t.45.175q.175.175.175.45 0 .225-.175.413-.175.187-.45.187Zm0-7.825q.95 0 1.638-.688.687-.687.687-1.637t-.687-1.638Q12.95 4.9 12 4.9t-1.625.687Q9.7 6.275 9.7 7.225t.675 1.637q.675.688 1.625.688Z"/>
    </Icon>
  )
});

export default IconMaterialNestDoorbellVisitorTwoTone;