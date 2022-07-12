import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorAlarmTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorAlarmTwoTone'
      short_name='DetectorAlarm'

      {...props}
    >
      <path d="m13.65 21.75-3.15.125-.125-6.15 3.15-.125Zm8.45-4.525-2.1 2.3-4.475-4.25L17.7 12.95ZM8.475 15.1 4.2 19.525 1.9 17.4l4.25-4.45Zm-.125-6h7.325l.3-1.125h-7.95L8.35 9.1Zm0 3.025q-1.075 0-1.9-.65t-1.05-1.7l-.425-1.8h-.55q-1.25 0-2.137-.888Q1.4 6.2 1.4 4.95V.8h21.2v4.15q0 1.25-.887 2.137-.888.888-2.138.888h-.525L18.6 9.8q-.275 1.025-1.088 1.675-.812.65-1.887.65Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorAlarmTwoTone;