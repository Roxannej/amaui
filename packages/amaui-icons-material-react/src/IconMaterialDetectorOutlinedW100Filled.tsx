import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorOutlinedW100Filled'
      short_name='Detector'

      {...props}
    >
      <path d="M12 19.4q-1.85 0-3.55-.638-1.7-.637-3.125-1.837l.5-.5q1.3 1.125 2.888 1.7 1.587.575 3.312.575 1.7 0 3.288-.563 1.587-.562 2.887-1.662l.5.475q-1.425 1.2-3.137 1.825Q13.85 19.4 12 19.4Zm0-3.7q-1.1 0-2.125-.375T8 14.275l.5-.5q.75.6 1.663.913.912.312 1.862.312.95 0 1.85-.312.9-.313 1.65-.913l.5.5q-.875.7-1.888 1.062-1.012.363-2.137.363Zm-3.35-5.45h6.7q.25 0 .45-.137.2-.138.3-.388l.55-1.475h-9.3l.55 1.475q.1.25.3.388.2.137.45.137Zm0 .7q-.475 0-.862-.262-.388-.263-.563-.713L6.6 8.25h-.8q-.625 0-1.062-.438Q4.3 7.375 4.3 6.75v-1.9h15.4v1.9q0 .625-.437 1.062-.438.438-1.063.438h-.8l-.675 1.725q-.175.425-.55.7-.375.275-.85.275Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorOutlinedW100Filled;
