import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMacroOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MacroOffSharpFilled'
      short_name='MacroOff'

      {...props}
    >
      <path d="m15.9 13.425-2.8-2.8q.65-.275 1.025-.887.375-.613.375-1.338 0-1.05-.725-1.775Q13.05 5.9 12 5.9q-.7 0-1.287.375-.588.375-.938 1L6.6 4.125q.425-.375.938-.588.512-.212 1.112-.212.125 0 .225.012.1.013.225.013.35-.875 1.138-1.413Q11.025 1.4 12 1.4t1.763.537q.787.538 1.137 1.413.125 0 .225-.013.1-.012.225-.012 1.3 0 2.212.925.913.925.913 2.225 0 .525-.163 1.012-.162.488-.512.913.325.425.5.912.175.488.175 1.013 0 1.15-.725 2.025t-1.85 1.075ZM19.775 23l-2.4-2.4q-1.125.85-2.488 1.325-1.362.475-2.887.475 0-1.5.475-2.875t1.325-2.5L12.175 15.4H12q-.975 0-1.762-.537-.788-.538-1.138-1.413-.125 0-.225.012-.1.013-.225.013-1.3 0-2.225-.925T5.5 10.325q0-.35.075-.675.075-.325.225-.625L1.375 4.6 2.8 3.175l18.4 18.4ZM12 22.4q-1.85 0-3.488-.712-1.637-.713-2.862-1.938t-1.938-2.863Q3 15.25 3 13.4q1.85 0 3.488.712 1.637.713 2.862 1.938t1.938 2.863Q12 20.55 12 22.4Zm8-4.875L16.875 14.4q.925-.5 1.962-.75 1.038-.25 2.163-.25 0 1.125-.25 2.162-.25 1.038-.75 1.963Z"/>
    </Icon>
  )
});

export default IconMaterialMacroOffSharpFilled;
