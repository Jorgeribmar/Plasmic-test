// import Table from '@/components/table';
import React from 'react';
// import { PLASMIC } from '../plasmic-init';
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

const Yolo: React.FC =  () => {
  // const plasmicData = await PLASMIC.fetchComponentData('Table');

  return (
    <div>
      <h1>Je suis une page de test</h1>
      {/* <PlasmicComponent component="Table" /> */}

      {/* <Table plasmicData={plasmicData.entryCompMetas} /> */}
    </div>
  );
};

export default Yolo;
