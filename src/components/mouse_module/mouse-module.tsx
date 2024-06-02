import { Card, Slider, Text } from "@fluentui/react-components";
import { useState } from "react";

export default function MouseModule() {

    const [sliderValue, setSliderValue] = useState(100);

    function handleChange(value: number) {
        setSliderValue(value);
    }

  return (
    <Card
      style={{
        marginRight: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Sensibilidad del púntero</Text>
      <Slider max={200} min={0} value={sliderValue} onChange={(_, data) => handleChange(data.value)}/>
      <Text>Sensibilidad: {sliderValue}</Text>
    </Card>
  );
}
