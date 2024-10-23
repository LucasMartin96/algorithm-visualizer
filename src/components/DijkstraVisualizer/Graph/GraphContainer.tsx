import { useGraph } from '../Context/GraphContext';
import { useAlgorithm } from '../Context/AlgorithmContext';
import { useSelection } from '../Context/SelectionContext';
import { useState } from 'react';
import Node from './Node';
import Edge from './Edge';
import EdgeControls from './EdgeControls';

const GraphContainer: React.FC = () => {
  const { graph, removeNode, removeEdge, handleNodeMove } = useGraph();
  const {
    startNode,
    endNode,
    viaNodes,
    shortestPathEdges,
    steps,
    currentStep,
    setStartNode,
    setEndNode,
    addViaNode,
  } = useAlgorithm();
  const { selectionMode, setSelectionMode } = useSelection();
  const [isEdgeMode, setIsEdgeMode] = useState(false);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);

  const handleNodeClick = (nodeId: string) => {
    if (isEdgeMode) {
      if (!selectedSource) {
        setSelectedSource(nodeId);
      } else if (nodeId !== selectedSource) {
        setSelectedTarget(nodeId);
      }
      return;
    }
    switch (selectionMode) {
      case 'start':
        setStartNode(nodeId);
        setSelectionMode(null);
        break;
      case 'end':
        setEndNode(nodeId);
        setSelectionMode(null);
        break;
      case 'via':
        addViaNode(nodeId);
        setSelectionMode(null);
        break;
      default:
        break;
    }
  };

  const resetEdgeSelection = () => {
    setSelectedSource(null);
    setSelectedTarget(null);
  };

  const currentProcessingNode =
    currentStep >= 0 && steps[currentStep]
      ? steps[currentStep].currentNode
      : null;

  const nodePositions = Object.fromEntries(
    graph.nodes.map((node) => [node.id, { x: node.x, y: node.y }])
  );

  return (
    <div className="relative">
      <EdgeControls
        onNodeSelect={handleNodeClick}
        selectedSource={selectedSource}
        selectedTarget={selectedTarget}
        onReset={resetEdgeSelection}
        isEdgeMode={isEdgeMode}
        setIsEdgeMode={setIsEdgeMode}
      />
      <svg
        className="w-full h-[32rem] bg-slate-900 rounded-lg"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid meet"
        style={{ touchAction: 'none' }}
      >
        {/* Edges */}
        {graph.edges.map((edge) => (
          <Edge
            key={`${edge.source}-${edge.target}`}
            edge={edge}
            nodePositions={nodePositions}
            isInPath={shortestPathEdges.some(
              (e) =>
                (e.source === edge.source && e.target === edge.target) ||
                (e.source === edge.target && e.target === edge.source)
            )}
            onRemove={() => removeEdge(edge.source, edge.target)}
          />
        ))}

        {/* Nodes */}
        {graph.nodes.map((node) => (
          <Node
            key={node.id}
            node={node}
            onClick={() => handleNodeClick(node.id)}
            onRemove={() => removeNode(node.id)}
            isStart={node.id === startNode}
            isEnd={node.id === endNode}
            isVia={viaNodes.includes(node.id)}
            isInPath={shortestPathEdges.some(
              (e) => e.source === node.id || e.target === node.id
            )}
            isCurrentNode={node.id === currentProcessingNode}
            onNodeMove={handleNodeMove}
            isEdgeMode={isEdgeMode}
            isSelected={
              node.id === selectedSource || node.id === selectedTarget
            }
            selectionMode={selectionMode}
          />
        ))}
      </svg>
    </div>
  );
};

export default GraphContainer;
