import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFace4OutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face4OutlinedFilled'
      short_name='Face4'

      {...props}
    >
      <path d="M9 16.25q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm6 0q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363ZM12 22q3.35 0 5.675-2.325Q20 17.35 20 14q0-.6-.075-1.163-.075-.562-.275-1.087-.525.125-1.05.188-.525.062-1.1.062-2.275 0-4.3-.975T9.75 8.3q-.8 1.95-2.287 3.388Q5.975 13.125 4 13.85V14q0 3.35 2.325 5.675Q8.65 22 12 22Zm0 2q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 16.075 2 14q0-.725.1-1.438.1-.712.3-1.362-1.075-.65-1.737-1.762Q0 8.325 0 6.975 0 4.9 1.45 3.45 2.9 2 4.975 2q1.325 0 2.438.637Q8.525 3.275 9.2 4.4q.65-.2 1.362-.3Q11.275 4 12 4q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 11.925 22 14t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 24 12 24Z"/>
    </Icon>
  )
});

export default IconMaterialFace4OutlinedFilled;
