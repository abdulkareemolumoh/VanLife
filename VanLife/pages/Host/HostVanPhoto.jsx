import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhoto() {
  const { currentVan } = useOutletContext();

  return (
    <div>
      <img src={currentVan.imageUrl} />
    </div>
  );
}
