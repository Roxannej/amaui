import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoChatRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatRoundedW700Filled'
      short_name='VideoChat'

      {...props}
    >
      <path d="M8 14h6q.425 0 .713-.288Q15 13.425 15 13v-2l.625.625Q16 12 16.5 11.8t.5-.75v-2.1q0-.55-.5-.75-.5-.2-.875.175L15 9V7q0-.425-.287-.713Q14.425 6 14 6H8q-.425 0-.713.287Q7 6.575 7 7v6q0 .425.287.712Q7.575 14 8 14Zm-6.85 5.05V4.3q0-1.325.912-2.238.913-.912 2.238-.912h15.4q1.325 0 2.238.912.912.913.912 2.238v11.4q0 1.325-.912 2.238-.913.912-2.238.912H5.15l-1.325 1.325q-.75.75-1.712.338-.963-.413-.963-1.463Z"/>
    </Icon>
  )
});

export default IconMaterialVideoChatRoundedW700Filled;
