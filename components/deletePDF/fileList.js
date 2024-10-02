// SomePage.js

import { FileList } from "./deletePDF";

export async function getStaticProps() {
 
  return {
    props: {
      apiUrl: "http://final-cam-server.vercel.app",
    },
  };
}

export default function deletePDF({ apiUrl }) {
  return (
    <div>
      <h1>Delete PDF</h1>
      <FileList apiUrl={apiUrl} />
    </div>
  );
}
