import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumerusSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusSharp'
      short_name='Humerus'

      {...props}
    >
      <path d="M9.05 22q-1.275 0-2.162-.875Q6 20.25 6 18.975q0-.6.238-1.15.237-.55.662-.975l2.125-2.075V11q-.025-.35-.3-.575Q8.45 10.2 8.15 10q-1.125-.85-1.637-1.75Q6 7.35 6 6.25q0-1.775 1.312-3.013Q8.625 2 10.5 2q.425 0 .812.112.388.113.688.263.325.125.538.25.212.125.437.125.5 0 1-.35.275-.15.575-.275.3-.125.675-.125 1.2 0 1.987.837.788.838.788 2.038 0 .575-.237 1.162-.238.588-.713 1.063l-2.025 2.075v5.575l2.1 2.1q.425.425.65.975.225.55.225 1.15 0 1.275-.862 2.15Q16.275 22 15 22q-.6 0-1.15-.225-.55-.225-.975-.65-.175-.175-.387-.263-.213-.087-.463-.087t-.463.087q-.212.088-.387.263-.425.425-.975.65Q9.65 22 9.05 22ZM9 20q.2 0 .388-.075.187-.075.337-.225.45-.45 1.025-.7.575-.25 1.225-.25.65 0 1.225.25.575.25 1.025.7.15.15.337.225.188.075.388.075.425 0 .738-.312.312-.313.312-.738 0-.2-.087-.375-.088-.175-.238-.325l-2.225-2.2q-.2-.2-.325-.488-.125-.287-.125-.587V9.2q0-.425.15-.8.15-.375.425-.65l2.075-2.075q.175-.175.263-.375.087-.2.087-.425 0-.375-.238-.638-.237-.262-.612-.262-.175 0-.338.025-.162.025-.312.15l-.925.65q-.125.075-.263.138Q13.175 5 13 5q-.2 0-.387-.113-.188-.112-.363-.237-.35-.275-.787-.462Q11.025 4 10.5 4q-1.025 0-1.762.662Q8 5.325 8 6.25q0 .675.312 1.075.313.4.913.975.125-.4.375-.988.25-.587.65-.987.175-.15.363-.237Q10.8 6 11 6q.425 0 .713.275.287.275.287.7 0 .2-.087.412-.088.213-.263.363l-.325.525Q11 8.8 11 10v4.925q0 .3-.125.587-.125.288-.325.488l-2.275 2.25q-.15.125-.225.312-.075.188-.075.388 0 .425.3.738.3.312.725.312Zm3-8.025Z"/>
    </Icon>
  )
});

export default IconMaterialHumerusSharp;