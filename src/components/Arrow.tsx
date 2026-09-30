import { DotIcon } from "./DotIcon";

export function Arrow({ diagonal = false, back = false }: {
  diagonal?: boolean;
  back?: boolean;
}) {
  const name = back ? "arrow-left" : diagonal ? "arrow-up-right" : "arrow-right";
  return <DotIcon name={name} motionDirection={back ? "back" : diagonal ? "diagonal" : "right"} />;
}
