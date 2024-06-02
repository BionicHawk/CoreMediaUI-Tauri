import { Card, Title2 } from "@fluentui/react-components";

export default function AppHeader() {
    return <Card
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gridColumnStart: 1,
            gridColumnEnd: 3
        }}
        >
        <Title2>CoreMediaUI</Title2>
    </Card>
}