import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlindSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindSharpW700'
      short_name='Blind'

      {...props}
    >
      <path d="M11.375 4.9q-.95 0-1.6-.65-.65-.65-.65-1.6 0-.95.65-1.6.65-.65 1.6-.65.95 0 1.6.65.65.65.65 1.6 0 .95-.65 1.6-.65.65-1.6.65Zm-1.1 18v-5.875L9.35 15.65 9 18.5l-3.325 4.425L3.55 21.35l2.925-3.9-.05-4.675q0-.875.137-1.888.138-1.012.388-1.812l-1.175.75V13.7h-2.65V8.3l4.3-2.6q.65-.4 1.163-.575Q9.1 4.95 9.6 4.95q.6 0 1.113.3.512.3.862.85l1.1 1.8q.575.95 1.925 1.55 1.35.6 2.9.6v2.65h-.75l5.3 9.2-1.725 1L14.1 12.1q-.875-.3-1.562-.75-.688-.45-1.263-1.1-.15.425-.225 1.075-.075.65-.075 1.475l1.95 2.75v7.35Z"/>
    </Icon>
  )
});

export default IconMaterialBlindSharpW700;
