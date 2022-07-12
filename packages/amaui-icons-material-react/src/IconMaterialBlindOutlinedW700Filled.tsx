import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlindOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindOutlinedW700Filled'
      short_name='Blind'

      {...props}
    >
      <path d="M11.375 4.9q-.95 0-1.6-.65-.65-.65-.65-1.6 0-.95.65-1.6.65-.65 1.6-.65.95 0 1.6.65.65.65.65 1.6 0 .95-.65 1.6-.65.65-1.6.65Zm-1.1 18v-5.875L9.35 15.65 9 18.5l-3.325 4.425L3.55 21.35l2.925-3.9-.05-4.675q0-.95.125-1.888.125-.937.4-1.812l-1.175.75V13.7h-2.65V8.3l4.3-2.6q.65-.4 1.163-.575Q9.1 4.95 9.6 4.95q.6 0 1.125.3t.85.85l1.1 1.8q.65 1.05 1.887 1.6 1.238.55 2.938.55v2.65h-.75l5.3 9.2-1.725 1L14.1 12.1q-.85-.3-1.562-.763-.713-.462-1.263-1.087-.175.475-.237 1.05-.063.575-.063 1.5l1.95 2.75v7.35Z"/>
    </Icon>
  )
});

export default IconMaterialBlindOutlinedW700Filled;