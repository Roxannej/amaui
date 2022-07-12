import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHeartRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHeartRoundedW700Filled'
      short_name='ShieldWithHeart'

      {...props}
    >
      <path d="M12 9.15q-.35-.425-.887-.662-.538-.238-1.138-.238-1.025 0-1.75.725-.725.725-.725 1.75 0 .875.45 1.587.45.713 2.075 2.288l.9.85q.45.425 1.075.425t1.075-.425l.875-.8q1.625-1.55 2.088-2.313.462-.762.462-1.612 0-1.025-.725-1.75-.725-.725-1.75-.725-.6 0-1.137.238-.538.237-.888.662Zm0 13.625q-.225 0-.425-.038-.2-.037-.35-.087-3.55-1.175-5.812-4.425Q3.15 14.975 3.15 11.1V6.6q0-.975.563-1.788Q4.275 4 5.2 3.65l5.7-2.125q.55-.2 1.1-.2t1.1.2l5.7 2.125q.925.35 1.488 1.162.562.813.562 1.788v4.5q0 3.875-2.263 7.125-2.262 3.25-5.812 4.425-.075.025-.775.125Z"/>
    </Icon>
  )
});

export default IconMaterialShieldWithHeartRoundedW700Filled;
