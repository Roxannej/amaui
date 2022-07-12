import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPerson3OutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person3OutlinedW700Filled'
      short_name='Person3'

      {...props}
    >
      <path d="M10 13.575q-1.45 0-2.475-1.025Q6.5 11.525 6.5 10.075q0-.575.162-1.087.163-.513.488-.938-.075-.225-.113-.463Q7 7.35 7 7.075q0-1.05.575-1.9.575-.85 1.475-1.275.55-.6 1.313-.963.762-.362 1.637-.362t1.637.362q.763.363 1.313.963.9.425 1.475 1.275.575.85.575 1.9 0 .275-.038.512-.037.238-.112.463.325.425.487.938.163.512.163 1.087 0 1.45-1.025 2.475Q15.45 13.575 14 13.575Zm-6.85 9.7v-3.7q0-1.075.563-1.988.562-.912 1.512-1.387 1.625-.8 3.325-1.212 1.7-.413 3.45-.413 1.8 0 3.5.4t3.275 1.2q.95.475 1.513 1.375.562.9.562 2.025v3.7Z"/>
    </Icon>
  )
});

export default IconMaterialPerson3OutlinedW700Filled;
