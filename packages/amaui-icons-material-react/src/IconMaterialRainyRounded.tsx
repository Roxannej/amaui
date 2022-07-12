import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRainyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainyRounded'
      short_name='Rainy'

      {...props}
    >
      <path d="M13.95 21.9q-.375.2-.762.062-.388-.137-.588-.512l-1.5-3q-.2-.375-.062-.762.137-.388.512-.588.375-.2.762-.062.388.137.588.512l1.5 3q.2.375.063.762-.138.388-.513.588Zm6 0q-.375.2-.762.062-.388-.137-.588-.512l-1.5-3q-.2-.375-.062-.762.137-.388.512-.588.375-.2.762-.062.388.137.588.512l1.5 3q.2.375.063.762-.138.388-.513.588Zm-12 0q-.375.2-.762.062-.388-.137-.588-.512l-1.5-3q-.2-.375-.062-.762.137-.388.512-.588.375-.2.762-.062.388.137.588.512l1.5 3q.2.375.063.762-.138.388-.513.588ZM7.5 16q-2.275 0-3.887-1.613Q2 12.775 2 10.5q0-2.075 1.375-3.625 1.375-1.55 3.4-1.825.8-1.425 2.188-2.238Q10.35 2 12 2q2.25 0 3.912 1.438 1.663 1.437 2.013 3.587 1.725.15 2.9 1.425Q22 9.725 22 11.5q0 1.875-1.312 3.188Q19.375 16 17.5 16Zm0-2h10q1.05 0 1.775-.725Q20 12.55 20 11.5q0-1.05-.725-1.775Q18.55 9 17.5 9H16V8q0-1.65-1.175-2.825Q13.65 4 12 4q-1.2 0-2.188.65-.987.65-1.487 1.75l-.25.6H7.45q-1.425.05-2.437 1.062Q4 9.075 4 10.5q0 1.45 1.025 2.475Q6.05 14 7.5 14ZM12 9Z"/>
    </Icon>
  )
});

export default IconMaterialRainyRounded;
