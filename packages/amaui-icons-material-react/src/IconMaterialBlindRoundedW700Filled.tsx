import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlindRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindRoundedW700Filled'
      short_name='Blind'

      {...props}
    >
      <path d="M11.375 4.9q-.925 0-1.587-.663-.663-.662-.663-1.587 0-.95.663-1.6Q10.45.4 11.375.4q.95 0 1.6.65.65.65.65 1.6 0 .925-.65 1.587-.65.663-1.6.663Zm.225 18q-.55 0-.937-.388-.388-.387-.388-.937v-4.55L9.35 15.65l-.225 2q-.05.425-.2.8-.15.375-.425.7l-2.025 2.725q-.325.425-.862.513-.538.087-.988-.263-.425-.325-.512-.875-.088-.55.237-.975l2.125-2.825-.025-4.675q0-.875.138-1.888.137-1.012.362-1.812l-1.175.75v2.55q0 .55-.375.937-.375.388-.95.388-.55 0-.937-.388-.388-.387-.388-.937v-2.3q0-.85.413-1.563Q3.95 7.8 4.65 7.375L7.425 5.7q.675-.425 1.188-.588.512-.162.987-.162.625 0 1.138.3.512.3.837.85l1.1 1.8q.5.825 1.538 1.425 1.037.6 1.987.725.55.075.95.45.4.375.4.925 0 .425-.225.75t-.575.45l4.825 8.4q.2.35.088.75-.113.4-.463.6-.35.225-.75.113-.4-.113-.6-.463l-5.725-9.95q-.875-.3-1.575-.738-.7-.437-1.275-1.087-.125.425-.213 1.075-.087.65-.087 1.475l1.375 1.925q.275.4.425.863.15.462.15.962v5.025q0 .55-.375.937-.375.388-.95.388Z"/>
    </Icon>
  )
});

export default IconMaterialBlindRoundedW700Filled;
