import { useState, useEffect } from "react";
import { Tree } from "primereact/tree";
import { NodeService } from "../service/NodeService";
import { useFieldChangeStore } from "../store/fieldChangeStore";

export default function TreeView() {
  const [nodes, setNodes] = useState([]);
  const [selectedNodeKey, setSelectedNodeKey] = useState("");
  const { fields, setFields } = useFieldChangeStore((state) => state);

  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);

  const onSelect = (event) => {
    setFields(event.node.data);
  };

  const onUnselect = () => {
    console.log("====================================");
    console.log("Unselect Event: ", fields);
    console.log("====================================");
  };

  return (
    <Tree
      filter
      filterMode="strict"
      filterPlaceholder="Strict Filter"
      value={nodes}
      selectionMode="single"
      selectionKeys={selectedNodeKey}
      onSelectionChange={(e) => setSelectedNodeKey(e.value)}
      onSelect={onSelect}
      onUnselect={onUnselect}
      className="w-full border-0 rounded-none h-full border-r-2 border-gray-200"
    />
  );
}
