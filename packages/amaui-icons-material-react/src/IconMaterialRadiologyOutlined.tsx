import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadiologyOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadiologyOutlined'
      short_name='Radiology'

      {...props}
    >
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V6H5Zm4 0v-1.8l-1.8-2.1q-.275-.275-.487-.75-.213-.475-.213-1.1 0-.325.062-.638.063-.312.213-.612-.125-.275-.2-.588Q6.5 12.1 6.5 11.75q0-.625.213-1.1.212-.475.487-.75L9 7.8V6h1.5v2.075q0 .125-.175.475l-2 2.35q-.175.2-.25.412Q8 11.525 8 11.75q0 .5.325.863.325.362.825.362.225 0 .425-.075.2-.075.35-.25.425-.425.963-.65.537-.225 1.112-.225.575 0 1.113.225.537.225.962.65.175.175.375.25.2.075.4.075.5 0 .825-.362.325-.363.325-.838 0-.225-.087-.438-.088-.212-.238-.412l-2-2.375q-.1-.1-.137-.225-.038-.125-.038-.25V6H15v1.8l1.825 2.15q.35.4.512.862.163.463.163.963 0 .325-.087.637-.088.313-.213.588.15.3.225.612.075.313.075.638 0 .625-.212 1.1-.213.475-.488.75L15 18.2V20h-1.5v-2.075q0-.15.175-.475l2-2.35q.175-.2.25-.425.075-.225.075-.45-.275.125-.55.187-.275.063-.575.063-.5 0-1-.2t-.875-.6q-.175-.2-.438-.3-.262-.1-.562-.1-.275 0-.537.1-.263.1-.463.3-.375.4-.863.6-.487.2-.987.2-.3 0-.588-.063-.287-.062-.562-.187 0 .225.075.45t.25.425l2 2.35q.075.125.125.238.05.112.05.237V20Zm-4 0V6Z"/>
    </Icon>
  )
});

export default IconMaterialRadiologyOutlined;
