import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTamperDetectionOffTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOffTwoTone'
      short_name='TamperDetectionOff'

      {...props}
    >
      <path d="M5.175 23.75q-.6 0-1.162-.238-.563-.237-.963-.637l-3.375-3.35.3-.35q.225-.225.513-.35.287-.125.587-.125.35 0 .663.125.312.125.512.375l.725.725V11.85q0-.375.262-.638.263-.262.613-.262.375 0 .625.262.25.263.25.638v4.425h.75V10.35q0-.375.263-.638Q6 9.45 6.35 9.45q.375 0 .638.262.262.263.262.638v5.925H8V11.35q0-.375.25-.638.25-.262.6-.262.375 0 .638.262.262.263.262.638v4.925h.75v-3.55q0-.375.262-.638.263-.262.613-.262.375 0 .625.262.25.263.25.638v8q0 1.25-.887 2.138-.888.887-2.138.887Zm15.5-.3L.475 3.2l1.6-1.6 20.25 20.25ZM1.45 8.45V6.4q0-1.1.675-1.937.675-.838 1.725-1.038h.05L8.95 8.45Zm21.125 8.8L18.7 13.375v2.2L6.525 3.375h9.15q1.25 0 2.137.887.888.888.888 2.138v4.2l3.875-3.875Zm-8.325 3.375v-6.85l4.35 4.35v.1q-.2 1.05-1.025 1.725t-1.95.675Z"/>
    </Icon>
  )
});

export default IconMaterialTamperDetectionOffTwoTone;