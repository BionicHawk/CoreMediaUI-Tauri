import { Button, Title3 } from "@fluentui/react-components";

export default function ServiceToggler(props: ServiceTogglerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <Title3>{props.text} </Title3>
      <Button
        appearance="primary"
        disabled={!props.enableButton}
        onClick={props.onClick}
      >
        {props.isActive ? "Activado" : "Desactivado"}
      </Button>
    </div>
  );
}

type ServiceTogglerProps = {
  isActive: boolean;
  enableButton: boolean;
  text: string;
  onClick: () => void;
};
