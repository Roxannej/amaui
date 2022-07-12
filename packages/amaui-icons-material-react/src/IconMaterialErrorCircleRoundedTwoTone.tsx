import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialErrorCircleRoundedTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorCircleRoundedTwoTone'
      short_name='ErrorCircleRounded'

      {...props}
    >
      <path d="M12.025 13.05q.6 0 1.05-.45.45-.45.45-1.075V8.05q0-.6-.45-1.038-.45-.437-1.05-.437-.625 0-1.075.45-.45.45-.45 1.05v3.475q0 .625.45 1.062.45.438 1.075.438ZM12 17.725q.7 0 1.188-.487.487-.488.487-1.188t-.487-1.2q-.488-.5-1.188-.5t-1.188.5q-.487.5-.487 1.2t.487 1.188q.488.487 1.188.487Zm0 4.875q-2.225 0-4.15-.825-1.925-.825-3.362-2.263-1.438-1.437-2.263-3.362T1.4 12q0-2.25.825-4.162.825-1.913 2.263-3.351Q5.925 3.05 7.85 2.225T12 1.4q2.25 0 4.163.825 1.912.825 3.35 2.262 1.437 1.438 2.262 3.351Q22.6 9.75 22.6 12q0 2.225-.825 4.15-.825 1.925-2.262 3.362-1.438 1.438-3.35 2.263Q14.25 22.6 12 22.6Z"/>
    </Icon>
  )
});

export default IconMaterialErrorCircleRoundedTwoTone;
