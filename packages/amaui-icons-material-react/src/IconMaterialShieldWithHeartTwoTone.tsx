import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHeartTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHeartTwoTone'
      short_name='ShieldWithHeart'

      {...props}
    >
      <path d="M12 9.2q-.325-.425-.862-.663Q10.6 8.3 10 8.3q-1 0-1.713.712-.712.713-.712 1.738 0 .85.438 1.55.437.7 2.037 2.25l.925.875q.425.4 1.025.4.6 0 1.05-.4l.875-.825Q15.55 13.075 16 12.325q.45-.75.45-1.575 0-1.025-.712-1.738Q15.025 8.3 14 8.3q-.6 0-1.125.237-.525.238-.875.663Zm0 13.325q-.225 0-.412-.05-.188-.05-.338-.075-3.475-1.15-5.675-4.338-2.2-3.187-2.2-6.962V6.675q0-.925.538-1.713.537-.787 1.437-1.112l5.6-2.1q.525-.2 1.063-.2.537 0 1.062.2l5.6 2.1q.875.325 1.412 1.112.538.788.538 1.713V11.1q0 3.775-2.2 6.962-2.2 3.188-5.675 4.338l-.75.125Z"/>
    </Icon>
  )
});

export default IconMaterialShieldWithHeartTwoTone;
