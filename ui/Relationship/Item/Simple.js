import Controller from "./Controller";
function UI({ relationship }) {
  return relationship;
}
export default function RelationshipItemSimple(props) {
  return <Controller {...props} UI={UI} />;
}
